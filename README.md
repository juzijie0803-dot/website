# My Website

Vite + React + Tailwind v4 專案，含 Framer Motion、Lucide React、clsx、tailwind-variants。

## 本地執行

```bash
# 安裝依賴
npm install

# 開發
npm run dev

# 建構（請確保無誤）
npm run build

# 預覽建構結果
npm run preview
```

## 技術棧

- **Vite** — 建構工具
- **React** — UI
- **Tailwind CSS v4** — `@import "tailwindcss"`（無 base/components/utilities）
- **Framer Motion** — 動效
- **Lucide React** — 圖標
- **clsx / tailwind-variants** — 樣式工具

## 目錄約定

- 靜態資源：`public/`
- 源碼：`src/`
- 別名：`@/*` → `src/*`（見 `jsconfig.json`）

## Supabase 配置（訪問記錄 + 交個朋友表單）

1. 在 [Supabase Dashboard](https://supabase.com/dashboard) 建立專案（或使用既有專案）。
2. 在專案 **SQL Editor** 中執行 `supabase-setup.sql`，建立 `visitor_logs`、`contact_submissions` 表及 RLS。
3. 複製 `.env.example` 為 `.env`，填入：
   - `VITE_SUPABASE_URL`：專案 URL（如 `https://xxxx.supabase.co`）
   - `VITE_SUPABASE_ANON_KEY`：專案 Settings → API → anon public key
4. 重啟 `npm run dev`。未配置時，訪問記錄與表單仍會正常運作，但不會寫入 Supabase。

## Cloudflare 部署

本專案建構產物為靜態檔案（`dist/`），可用 **Cloudflare Pages** 部署。

### 方式一：連動 GitHub（推薦）

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. 選擇 **GitHub**，授權後選倉庫 `juzijie0803-dot/website`。
3. 建構設定：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**：留空（或 `/`）。
4. 儲存並部署。之後每次推送到 `main` 會自動重新建構與發布。

### 方式二：本機用 Wrangler 手動部署

1. 安裝依賴（含 Wrangler）：`npm install`
2. 登入 Cloudflare：`npx wrangler login`
3. 首次需建立 Pages 專案：  
   `npx wrangler pages project create website`  
   （專案名稱可自訂，與下方 `--project-name` 一致）
4. 執行部署：`npm run deploy`  
   會先執行 `npm run build`，再上傳 `dist` 到 Cloudflare Pages。

部署完成後，站點會出現在 **Workers & Pages** 中，並得到一個 `*.pages.dev` 網址。
