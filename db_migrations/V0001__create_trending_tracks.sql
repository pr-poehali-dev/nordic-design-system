CREATE TABLE trending_tracks (
  id SERIAL PRIMARY KEY,
  rank INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  genre VARCHAR(100) DEFAULT 'Club House',
  is_new BOOLEAN DEFAULT false,
  is_hot BOOLEAN DEFAULT false,
  cover_color VARCHAR(100) DEFAULT 'from-purple-600 to-pink-600',
  src_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO trending_tracks (rank, title, artist, genre, is_new, is_hot, cover_color, src_url) VALUES
(1, 'Нелюбовь', 'Гости из будущего (Alexx Slam Remix)', 'Club House', true, true, 'from-purple-600 to-pink-600', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/23da0f7c-62ae-472f-bbcd-92490bfefdd2.mp3'),
(2, 'О Боже, какой мужчина!', 'Натали (Alexx Slam Remix)', 'Club House', false, true, 'from-sky-500 to-blue-700', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/6dd62d72-82fb-45e7-8fac-0880834c2174.mp3'),
(3, 'E Samba', 'Junior Jack (Mike Prado Extended Mix)', 'Club House', false, false, 'from-orange-500 to-amber-600', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/75d0cd23-ff50-40e7-97e0-d06de6442bc4.mp3'),
(4, 'Party Rock Anthem', 'LMFAO (Chad & Mike Prado Extended Mix)', 'Club House', true, false, 'from-yellow-500 to-red-500', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/7e7a7075-6f83-4169-ad4f-1cc4781dc2ec.mp3'),
(5, 'Hey Baby', 'Pitbull & T-Pain (Eddie G & Starkov Remix)', 'Club House', false, false, 'from-emerald-600 to-teal-800', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/aba1cc27-867c-47a9-8643-49c8e6dacf9a.mp3'),
(6, 'Candy Shop', '50 Cent (Eddie G & Starkov Extended Remix)', 'Club House', false, false, 'from-red-600 to-rose-800', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/cd50c996-224c-40ba-bbb0-3e67429d71b4.mp3'),
(7, 'Я робот', 'Катя Чехова (DJ JON & OLMEGA Extended Remix)', 'Club House', true, false, 'from-slate-500 to-blue-900', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/9ba186f1-61d0-48c2-9dcb-217df6b78d82.mp3'),
(8, 'We Will Rock You', 'Queen (Dmc Cox Extended Mix)', 'Club House', false, false, 'from-violet-700 to-purple-900', 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/cea48050-fa6c-447c-9904-3c334f64d1cd.mp3');
