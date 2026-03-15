"""
API для управления треками страницы 'Сейчас в тренде'.
GET / — список всех треков
POST /add — добавить трек
POST /update — обновить трек
DELETE /delete — удалить трек
POST /upload — загрузить MP3 и добавить трек
"""
import json
import os
import base64
import uuid
import psycopg2

CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

def get_conn():
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    conn.autocommit = True
    return conn

def resp(status, body):
    return {"statusCode": status, "headers": {**CORS, "Content-Type": "application/json"}, "body": json.dumps(body, ensure_ascii=False)}

def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS, "body": ""}

    method = event.get("httpMethod", "GET")
    path = event.get("path", "/")
    schema = os.environ.get("MAIN_DB_SCHEMA", "public")

    # GET / — список треков (без авторизации)
    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f'SELECT id, rank, title, artist, genre, is_new, is_hot, cover_color, src_url FROM {schema}.trending_tracks ORDER BY rank ASC')
        rows = cur.fetchall()
        tracks = [
            {"id": r[0], "rank": r[1], "title": r[2], "artist": r[3], "genre": r[4],
             "isNew": r[5], "isHot": r[6], "coverColor": r[7], "src": r[8]}
            for r in rows
        ]
        cur.close(); conn.close()
        return resp(200, {"tracks": tracks})

    body = json.loads(event.get("body") or "{}")

    # Проверка пароля для всех изменяющих операций
    admin_password = os.environ.get("ADMIN_PASSWORD", "")
    if body.get("password") != admin_password:
        return resp(403, {"error": "Неверный пароль"})

    # POST /add — добавить трек вручную
    if method == "POST" and path.endswith("/add"):
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"INSERT INTO {schema}.trending_tracks (rank, title, artist, genre, is_new, is_hot, cover_color, src_url) VALUES (%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id",
            (body["rank"], body["title"], body["artist"], body.get("genre", "Club House"),
             body.get("isNew", False), body.get("isHot", False),
             body.get("coverColor", "from-purple-600 to-pink-600"), body["src"])
        )
        new_id = cur.fetchone()[0]
        cur.close(); conn.close()
        return resp(200, {"ok": True, "id": new_id})

    # POST /update — обновить трек
    if method == "POST" and path.endswith("/update"):
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"UPDATE {schema}.trending_tracks SET rank=%s, title=%s, artist=%s, genre=%s, is_new=%s, is_hot=%s, cover_color=%s, src_url=%s, updated_at=NOW() WHERE id=%s",
            (body["rank"], body["title"], body["artist"], body.get("genre", "Club House"),
             body.get("isNew", False), body.get("isHot", False),
             body.get("coverColor", "from-purple-600 to-pink-600"), body["src"], body["id"])
        )
        cur.close(); conn.close()
        return resp(200, {"ok": True})

    # DELETE /delete
    if method == "DELETE" and path.endswith("/delete"):
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"DELETE FROM {schema}.trending_tracks WHERE id=%s", (body["id"],))
        cur.close(); conn.close()
        return resp(200, {"ok": True})

    # POST /upload — загрузить MP3 в S3 и добавить трек
    if method == "POST" and path.endswith("/upload"):
        import boto3
        file_data = base64.b64decode(body["file"])
        file_key = f"trending/{uuid.uuid4()}.mp3"
        s3 = boto3.client(
            "s3",
            endpoint_url="https://bucket.poehali.dev",
            aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
            aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
        )
        s3.put_object(Bucket="files", Key=file_key, Body=file_data, ContentType="audio/mpeg")
        cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{file_key}"

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"INSERT INTO {schema}.trending_tracks (rank, title, artist, genre, is_new, is_hot, cover_color, src_url) VALUES (%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id",
            (body["rank"], body["title"], body["artist"], body.get("genre", "Club House"),
             body.get("isNew", False), body.get("isHot", False),
             body.get("coverColor", "from-purple-600 to-pink-600"), cdn_url)
        )
        new_id = cur.fetchone()[0]
        cur.close(); conn.close()
        return resp(200, {"ok": True, "id": new_id, "url": cdn_url})

    return resp(404, {"error": "Not found"})