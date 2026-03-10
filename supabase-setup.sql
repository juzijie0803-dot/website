-- 網站訪問記錄與交個朋友表單：在 Supabase SQL Editor 執行
-- https://supabase.com/dashboard → 專案 → SQL Editor → 貼上並執行

-- 1. 訪問記錄表
CREATE TABLE IF NOT EXISTS visitor_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visited_at TIMESTAMPTZ DEFAULT now(),
  path TEXT,
  referrer TEXT,
  user_agent TEXT
);

-- 2. Soulmate 匹配測試填寫明細表
CREATE TABLE IF NOT EXISTS soulmate_quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  zodiac TEXT,
  mbti TEXT,
  fruit TEXT,
  pet TEXT,
  sport TEXT,
  match_percent INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 交個朋友表單表
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. RLS：允許匿名插入（前端使用 anon key）
ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE soulmate_quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous insert on visitor_logs" ON visitor_logs;
CREATE POLICY "Allow anonymous insert on visitor_logs"
  ON visitor_logs FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anonymous insert on soulmate_quiz_results" ON soulmate_quiz_results;
CREATE POLICY "Allow anonymous insert on soulmate_quiz_results"
  ON soulmate_quiz_results FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anonymous insert on contact_submissions" ON contact_submissions;
CREATE POLICY "Allow anonymous insert on contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- 查詢需認證（可選，若僅後台查看可加 SELECT policy for authenticated）
-- 此處不開放 anon 查詢，僅允許插入
