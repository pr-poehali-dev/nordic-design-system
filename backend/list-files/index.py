import os
import json
import urllib.request
import hmac
import hashlib
import datetime


def sign(key, msg):
    return hmac.new(key, msg.encode('utf-8'), hashlib.sha256).digest()


def handler(event, context):
    """Список файлов в S3 хранилище через AWS Signature V4"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    secret_key = os.environ['AWS_SECRET_ACCESS_KEY']
    bucket = 'files'
    region = 'us-east-1'
    host = 'bucket.poehali.dev'

    now = datetime.datetime.utcnow()
    amz_date = now.strftime('%Y%m%dT%H%M%SZ')
    date_stamp = now.strftime('%Y%m%d')

    canonical_uri = f'/{bucket}'
    canonical_querystring = ''
    canonical_headers = f'host:{host}\nx-amz-date:{amz_date}\n'
    signed_headers = 'host;x-amz-date'
    payload_hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    canonical_request = f'GET\n{canonical_uri}\n{canonical_querystring}\n{canonical_headers}\n{signed_headers}\n{payload_hash}'

    credential_scope = f'{date_stamp}/{region}/s3/aws4_request'
    string_to_sign = f'AWS4-HMAC-SHA256\n{amz_date}\n{credential_scope}\n{hashlib.sha256(canonical_request.encode()).hexdigest()}'

    signing_key = sign(sign(sign(sign(f'AWS4{secret_key}'.encode('utf-8'), date_stamp), region), 's3'), 'aws4_request')
    signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

    auth = f'AWS4-HMAC-SHA256 Credential={access_key}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}'

    url = f'https://{host}/{bucket}'
    req = urllib.request.Request(url, headers={'host': host, 'x-amz-date': amz_date, 'Authorization': auth})
    with urllib.request.urlopen(req) as resp:
        body = resp.read().decode('utf-8')

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'},
        'body': body
    }
