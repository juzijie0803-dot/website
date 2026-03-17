# 部署到 Cloudflare Pages（含 Supabase）

## 方式一：GitHub Actions 自动部署（推荐）

每次推送到 `main` 分支会通过 GitHub Actions 构建并部署到 Cloudflare Pages。

### 1. 确认 Cloudflare Pages 项目

若你已通过 Cloudflare Git 连接过仓库，项目应已存在。记下项目名称（如 `website`），需与 workflow 中 `--project-name` 一致。

若尚未创建：登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **直接上传**，项目名称填 `website`。

### 2. 获取 Cloudflare 凭证

- **Account ID**：Cloudflare 控制台右侧或 [Overview](https://dash.cloudflare.com) 页面可见
- **API Token**：前往 [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → **Create Token** → 使用「Edit Cloudflare Workers」模板，权限需包含 **Account** → **Cloudflare Pages** → **Edit**

### 3. 配置 GitHub Secrets

在仓库 **Settings** → **Secrets and variables** → **Actions** → **New repository secret** 中添加：

| Secret 名称 | 说明 |
|-------------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |
| `VITE_SUPABASE_URL` | Supabase 项目 URL（如 `https://xxxx.supabase.co`） |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

### 4. 推送触发部署

将代码推送到 `main` 分支后，GitHub Actions 会自动构建并部署。可在 **Actions** 标签页查看运行状态。

若 Pages 项目名称不是 `website`，请修改 `.github/workflows/deploy.yml` 中的 `--project-name=website`。

---

## 方式二：Cloudflare Git 集成

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选择 GitHub 仓库，配置 Build command: `npm run build`，Build output: `dist`
3. 在 **Settings** → **Environment variables** 中添加 `VITE_SUPABASE_URL` 和 `VITE_SUPABASE_ANON_KEY`

---

## 方式三：命令行手动部署

需要先登录 Cloudflare 或配置 API Token。

```bash
# 1. 登录 Cloudflare（会打开浏览器）
npx wrangler login

# 2. 构建并部署
npm run deploy
```

若在 CI 或非交互环境，需设置环境变量 `CLOUDFLARE_API_TOKEN`（在 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) 创建，需包含 **Cloudflare Pages Edit** 权限）。

---

## 绑定自定义域名（zhangyuqing.xyz）

### 前提

- 域名 `zhangyuqing.xyz` 已购买
- Cloudflare Pages 项目已部署成功

### 步骤

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → 进入你的 Pages 项目（如 `website`）
2. 点击 **Custom domains** → **Set up a custom domain**
3. 输入 `zhangyuqing.xyz`，点击 **Continue**

### 若域名已在 Cloudflare 托管

- Cloudflare 会自动添加 DNS 记录，等待 SSL 证书签发即可（通常几分钟）

### 若域名在其他注册商（阿里云、腾讯云、Namecheap 等）

**方式 A：将域名迁移到 Cloudflare（推荐）**

1. 在 Cloudflare 点击 **Add a site**，输入 `zhangyuqing.xyz`
2. 选择免费计划，Cloudflare 会给出两个 nameserver（如 `xxx.ns.cloudflare.com`）
3. 到域名注册商处，将域名的 DNS 服务器改为 Cloudflare 提供的 nameserver
4. 等待 DNS 生效（通常 24 小时内），再回到 Pages 的 Custom domains 添加 `zhangyuqing.xyz`

**方式 B：不迁移，仅添加 CNAME（仅适用于 www 子域名）**

- 根域名 `zhangyuqing.xyz` 需使用 A 记录或 CNAME flattening，部分注册商支持有限
- 建议使用 `www.zhangyuqing.xyz`：在注册商 DNS 中添加 CNAME 记录：
  - 名称：`www`
  - 目标：`website.pages.dev`（或你的 Pages 项目对应的 `.pages.dev` 地址）
- 添加后，在 Cloudflare Pages 的 Custom domains 中添加 `www.zhangyuqing.xyz`

### 可选：同时支持根域名与 www

- 根域名 `zhangyuqing.xyz`：需将域名加入 Cloudflare 并配置 nameserver
- `www.zhangyuqing.xyz`：添加 CNAME 指向 `website.pages.dev`
- 在 Pages Custom domains 中可同时添加两者

---

## Supabase 环境变量

访问记录、联系表单、Soulmate 测试填写明细都依赖 Supabase。部署时务必在 Cloudflare Pages 的 **Environment variables** 中配置：

- `VITE_SUPABASE_URL`：Supabase 项目 URL（如 `https://xxxx.supabase.co`）
- `VITE_SUPABASE_ANON_KEY`：Supabase 的 anon/public key

可在 [Supabase Dashboard](https://supabase.com/dashboard) → 项目 → **Settings** → **API** 中获取。
