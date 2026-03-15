import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const API = "https://functions.poehali.dev/b98224d2-b4a3-4a16-acce-c1e6afcee00d";

const COLORS = [
  { label: "Фиолетовый", value: "from-purple-600 to-pink-600" },
  { label: "Голубой", value: "from-sky-500 to-blue-700" },
  { label: "Оранжевый", value: "from-orange-500 to-amber-600" },
  { label: "Жёлто-красный", value: "from-yellow-500 to-red-500" },
  { label: "Зелёный", value: "from-emerald-600 to-teal-800" },
  { label: "Красный", value: "from-red-600 to-rose-800" },
  { label: "Серо-синий", value: "from-slate-500 to-blue-900" },
  { label: "Тёмно-фиолетовый", value: "from-violet-700 to-purple-900" },
];

interface Track {
  id: number;
  rank: number;
  title: string;
  artist: string;
  genre: string;
  isNew: boolean;
  isHot: boolean;
  coverColor: string;
  src: string;
}

const emptyForm = {
  rank: 1,
  title: "",
  artist: "",
  genre: "Club House",
  isNew: false,
  isHot: false,
  coverColor: "from-purple-600 to-pink-600",
  src: "",
};

export default function AdminTrending() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ ...emptyForm });
  const [editId, setEditId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const notify = (text: string, ok = true) => {
    setMsg({ text, ok });
    setTimeout(() => setMsg(null), 3000);
  };

  const loadTracks = async () => {
    setLoading(true);
    const r = await fetch(API);
    const data = await r.json();
    setTracks(data.tracks || []);
    setLoading(false);
  };

  useEffect(() => { loadTracks(); }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = (reader.result as string).split(",")[1];
      const r = await fetch(`${API}/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, file: base64 }),
      });
      const data = await r.json();
      setUploading(false);
      if (data.ok) {
        notify("Трек загружен и добавлен!");
        setForm({ ...emptyForm });
        loadTracks();
      } else {
        notify("Ошибка загрузки", false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!form.title || !form.artist || !form.src) {
      notify("Заполни название, исполнителя и ссылку", false);
      return;
    }
    setSaving(true);
    if (editId !== null) {
      await fetch(`${API}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: editId }),
      });
      notify("Трек обновлён!");
      setEditId(null);
    } else {
      await fetch(`${API}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      notify("Трек добавлен!");
    }
    setForm({ ...emptyForm });
    setSaving(false);
    loadTracks();
  };

  const handleEdit = (track: Track) => {
    setEditId(track.id);
    setForm({
      rank: track.rank,
      title: track.title,
      artist: track.artist,
      genre: track.genre,
      isNew: track.isNew,
      isHot: track.isHot,
      coverColor: track.coverColor,
      src: track.src,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API}/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleteId(null);
    notify("Трек удалён!");
    loadTracks();
  };

  const cancelEdit = () => {
    setEditId(null);
    setForm({ ...emptyForm });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">← На сайт</a>
            </div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Icon name="Flame" size={22} className="text-orange-400" />
              Управление трендами
            </h1>
          </div>
          <a href="/trending" target="_blank" className="text-zinc-400 hover:text-white text-sm flex items-center gap-1">
            <Icon name="ExternalLink" size={14} />
            Страница трендов
          </a>
        </div>

        {/* Уведомление */}
        {msg && (
          <div className={`mb-4 px-4 py-3 rounded-xl text-sm font-medium ${msg.ok ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}>
            {msg.text}
          </div>
        )}

        {/* Форма */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Icon name={editId !== null ? "Pencil" : "Plus"} size={16} className="text-purple-400" />
            {editId !== null ? "Редактировать трек" : "Добавить трек"}
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-zinc-400 text-xs mb-1 block">Позиция</label>
              <input
                type="number" min={1} max={20}
                value={form.rank}
                onChange={(e) => setForm({ ...form, rank: +e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="text-zinc-400 text-xs mb-1 block">Жанр</label>
              <input
                value={form.genre}
                onChange={(e) => setForm({ ...form, genre: e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
                placeholder="Club House"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="text-zinc-400 text-xs mb-1 block">Название трека *</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
              placeholder="Нелюбовь"
            />
          </div>

          <div className="mb-3">
            <label className="text-zinc-400 text-xs mb-1 block">Исполнитель + ремикс *</label>
            <input
              value={form.artist}
              onChange={(e) => setForm({ ...form, artist: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
              placeholder="Гости из будущего (Alexx Slam Remix)"
            />
          </div>

          <div className="mb-3">
            <label className="text-zinc-400 text-xs mb-1 block">Ссылка на MP3 (CDN)</label>
            <input
              value={form.src}
              onChange={(e) => setForm({ ...form, src: e.target.value })}
              className="w-full bg-zinc-800 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 font-mono"
              placeholder="https://cdn.poehali.dev/..."
            />
          </div>

          <div className="mb-4">
            <label className="text-zinc-400 text-xs mb-1 block">Цвет обложки</label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setForm({ ...form, coverColor: c.value })}
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${c.value} border-2 transition-all ${form.coverColor === c.value ? "border-white scale-110" : "border-transparent"}`}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-5">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.isNew}
                onChange={(e) => setForm({ ...form, isNew: e.target.checked })}
                className="w-4 h-4 accent-emerald-500"
              />
              <span className="text-sm text-zinc-300">NEW</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.isHot}
                onChange={(e) => setForm({ ...form, isHot: e.target.checked })}
                className="w-4 h-4 accent-red-500"
              />
              <span className="text-sm text-zinc-300">HOT</span>
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
            >
              {saving ? "Сохраняю..." : editId !== null ? "Сохранить изменения" : "Добавить трек"}
            </Button>

            {editId === null && (
              <>
                <span className="text-zinc-600 self-center text-sm">или</span>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-xl"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading || !form.title || !form.artist}
                >
                  <Icon name="Upload" size={15} className="mr-2" />
                  {uploading ? "Загружаю..." : "Загрузить MP3"}
                </Button>
                <input ref={fileRef} type="file" accept="audio/mp3,audio/mpeg" className="hidden" onChange={handleFileUpload} />
                {(!form.title || !form.artist) && (
                  <p className="text-zinc-500 text-xs self-center">Сначала заполни название и исполнителя</p>
                )}
              </>
            )}

            {editId !== null && (
              <Button variant="ghost" onClick={cancelEdit} className="text-zinc-400 hover:text-white">
                Отмена
              </Button>
            )}
          </div>
        </div>

        {/* Список треков */}
        <div>
          <h2 className="font-semibold mb-4 text-zinc-300">Треки в топе ({tracks.length})</h2>
          {loading ? (
            <div className="text-zinc-500 text-sm py-8 text-center">Загружаю...</div>
          ) : tracks.length === 0 ? (
            <div className="text-zinc-500 text-sm py-8 text-center">Треков нет — добавь первый!</div>
          ) : (
            <div className="space-y-2">
              {tracks.map((track) => (
                <div key={track.id} className="flex items-center gap-3 bg-zinc-900 border border-white/8 rounded-xl p-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${track.coverColor} flex-shrink-0 flex items-center justify-center text-white font-bold text-sm`}>
                    {track.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-white text-sm truncate">{track.title}</span>
                      {track.isNew && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-500/30">NEW</span>}
                      {track.isHot && <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-full border border-red-500/30">HOT</span>}
                    </div>
                    <p className="text-zinc-400 text-xs truncate">{track.artist}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(track)}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Pencil" size={13} className="text-zinc-400" />
                    </button>
                    {deleteId === track.id ? (
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleDelete(track.id)} className="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded bg-red-500/10">Удалить</button>
                        <button onClick={() => setDeleteId(null)} className="text-xs text-zinc-500 hover:text-zinc-300 px-2 py-1">Отмена</button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteId(track.id)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors"
                      >
                        <Icon name="Trash2" size={13} className="text-zinc-400 hover:text-red-400" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
