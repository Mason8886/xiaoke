# XiaoKe (小克) — Handoff Document

## 1. Current Project Goal

This is a **neutral customized Claude Code GUI** named **小克 / XiaoKe**, forked from TOKENICODE (https://github.com/yiliqi78/TOKENICODE).

**Core principles:**
- No personal information (names, emails, schools, identities) anywhere in the project.
- Keep all original core functionality intact.
- Brand the app as 小克 (Chinese) / XiaoKe (English).
- Tauri identifier: `app.xiaoke.desktop`.
- Package/repository name: `xiaoke`.
- Apache 2.0 license retained with original attribution.

## 2. Completed Work

### Branding changes (all source code)
- `package.json`: name → `xiaoke`
- `index.html`: title → `小克`
- `src-tauri/tauri.conf.json`: productName → `XiaoKe`, identifier → `app.xiaoke.desktop`, window title → `小克`, updater pubkey removed, endpoints cleared, `createUpdaterArtifacts` → false
- `src-tauri/Cargo.toml`: package name → `xiaoke`, lib name → `xiaoke_lib`, description updated
- `editions/alpha/tauri.alpha.conf.json`: productName → `XiaoKe Alpha`, identifier → `app.xiaoke.desktop.alpha`, updater endpoints cleared
- `vite.config.ts`: `__APP_NAME__` → `小克` / `小克 Alpha`
- `src-tauri/src/main.rs`: `tokenicode_lib` → `xiaoke_lib`
- `src-tauri/src/lib.rs`: all `[TOKENICODE]` log prefixes → `[XiaoKe]`, data dir `~/.tokenicode/` → `~/.xiaoke/`, `APP_DATA_DIR_NAME` → `app.xiaoke.desktop`, event names (`tokenicode_*` → `xiaoke_*`), function names (`tokenicode_data_path` → `xiaoke_data_path`), test paths (`tinyzhuang` → `username`), all comments updated
- `src-tauri/src/protocol.rs`: all TOKENICODE references → XiaoKe
- `src-tauri/src/commands/claude_process.rs`: log prefix → `[XiaoKe]`
- All frontend `.ts`/`.tsx` files: event names, localStorage keys, CSS variables, log prefixes, CodeMirror exports, i18n strings, store names, notification titles — all updated
- `src-tauri/resources/*/InfoPlist.strings`: macOS bundle names → `小克` / `XiaoKe`
- `.github/workflows/release.yml`: release names → `XiaoKe` / `XiaoKe Alpha`

### Data directory
- `~/.tokenicode/` → `~/.xiaoke/` (safe_data_dir, tracked_sessions.txt, pinned.json, archived.json, providers.json path, temp dir)
- `~/.claude/tokenicode_session_names.json` → `~/.claude/xiaoke_session_names.json`
- localStorage keys: all `tokenicode-*` → `xiaoke-*`

### Documentation updated
- `CLAUDE.md`: personal AI personality section removed, branding updated, paths updated
- `README.md`: rewritten with XiaoKe branding, attribution preserved
- `README_zh.md`: rewritten with 小克 branding, attribution preserved
- `CHANGELOG.md`: title updated
- `NOTICE`: updated with XiaoKe description, original attribution preserved

### Files deleted (safe to remove)
- `latest.json`, `latest-alpha.json`, `latest-gitee.json`, `latest-alpha-gitee.json` — updater metadata (updater disabled)
- `docs/landing.html` — original author's marketing page
- `docs/cloud-thoughts-mobile-demo.html` — original author's demo page
- `docs/TOKENICODE重构进度.md` → renamed to `docs/重构进度.md`

### Files intentionally NOT changed
- `LICENSE` — Apache 2.0, legally required to preserve original copyright notice
- `.github/workflows/release.yml` — GitHub Actions secrets are placeholder variable names, no actual keys exposed

### Preserved functionality (zero deletions)
Claude Code CLI integration, multi-session tabs, file explorer, API Provider system, Skills panel, MCP management, permission control, Rewind, plan mode, i18n (zh/en), GitHub workflows, session management, file management, Preview panel, Agents panel, Command palette, Plugins panel.

## 3. Build Verification

| Check | Result |
|-------|--------|
| TypeScript (`tsc --noEmit`) | ✅ Passed — zero errors |
| Vite build (`vite build`) | ✅ Passed — built in ~5.5s |
| Rust (`cargo check`) | ⚠️ NOT RUN — Rust toolchain not installed on local machine |

## 4. Important Remaining Issues

### Must do before release
1. **Install Rust toolchain** and run `cargo check` + `cargo clippy` in `src-tauri/`. The `Cargo.lock` will auto-regenerate.
2. **Tauri updater**: currently disabled (endpoints empty, pubkey removed, createUpdaterArtifacts=false). If you want auto-update, generate your own key pair and configure your own endpoint.
3. **Do NOT use the original author's** updater endpoint (`mistydew/tokenicode-deepseek-alpha`) or signing pubkey — both have been removed.
4. **App icons**: `src-tauri/icons/` and `public/app-icon.png` still contain original project icons. Replace with XiaoKe-specific icons.

### Nice to do
5. **Reference docs**: `ARCHITECTURE.md`, `docs/*.md`, `.trellis/spec/` still reference "TOKENICODE" in historical/architecture context. These are non-critical for running the app.
6. **Rust test paths**: changed `tinyzhuang` to `username` in tests, but macOS-specific tests may need adjustment on your actual machine.

## 5. Next Planned Feature: 小克工作台 (XiaoKe Dashboard)

A new dashboard page with seven entry points:

| # | Entry | Description |
|---|-------|-------------|
| 1 | 一键创建 AI 项目需求文档 | One-click AI project requirements document generation |
| 2 | 一键生成前端/后端开发计划 | One-click frontend/backend development plan generation |
| 3 | 自动生成 Claude Code / Codex 修改指令 | Auto-generate Claude Code / Codex modification instructions |
| 4 | Skill 管理器中文化 | Chinese localization for Skill manager |
| 5 | API Provider 可视化管理 | Visual API Provider management |
| 6 | MCP 管理器 | MCP Manager |
| 7 | GitHub 项目助手 | GitHub Project Assistant |

## 6. Rules for Next Session

1. **No personal information** — never include names, emails, schools, real identities, or personal identifiers.
2. **Do not remove existing functionality** — all Claude Code, Provider, Skills, MCP, GitHub, file, and session features must stay.
3. **Make small, incremental changes** — one feature at a time, verify after each step.
4. **Run typecheck/build after changes** — `npx tsc --noEmit` and `npx vite build` must pass.
5. **Keep Apache 2.0 license notices** intact — LICENSE and attribution in NOTICE must be preserved.
6. **Neutral branding** — use 小克 (Chinese UI) / XiaoKe (English/internal).
