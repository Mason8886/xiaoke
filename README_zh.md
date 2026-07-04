<div align="center">

<img src="public/app-icon.png" alt="XiaoKe Logo" width="120" />

# 小克 (XiaoKe)

### Claude Code 精美桌面客户端

[![License](https://img.shields.io/badge/许可证-Apache%202.0-green?style=flat-square)](LICENSE)

</div>

---

**小克 (XiaoKe)** 为 [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) 打造精美的桌面图形界面 — 自由接入第三方 API，原生支持国内服务商，提供文件管理、会话管理和结构化权限控制的完整体验。

> 本项目基于 [TOKENICODE](https://github.com/yiliqi78/TOKENICODE) 修改而来。感谢原作者 TinyZ / yiliqi78 以及 TOKENICODE 项目的开源工作。详见 [LICENSE](LICENSE) 和 [NOTICE](NOTICE)。

## 功能

- **Claude Code CLI 集成** — 通过 Tauri 2 子进程管理 Claude Code CLI
- **多会话标签页** — 同时运行多个对话，支持切换、归档、置顶、导出
- **文件浏览器** — 内置文件树、预览、CodeMirror 编辑器
- **API Provider 系统** — 支持 Anthropic、OpenAI 兼容格式、自定义 API 端点
- **Skills 面板** — 管理 Claude Code Skills、Codex Skills
- **MCP 管理** — 扫描、导入、管理 MCP 服务器配置
- **权限控制** — 通过 SDK Control Protocol 处理权限请求
- **回退 (Rewind)** — 支持对话轮次回退
- **计划模式** — 支持 Claude Code 的计划/代码/询问/全自动模式
- **中英双语** — 完整的 i18n 支持

## 与原项目的关系

这是 TOKENICODE 的独立分支。原项目仓库：[https://github.com/yiliqi78/TOKENICODE](https://github.com/yiliqi78/TOKENICODE)

## 许可证

本项目沿用原项目的 **Apache License 2.0**。详见 [LICENSE](LICENSE) 和 [NOTICE](NOTICE)。

## 致谢

- [TOKENICODE](https://github.com/yiliqi78/TOKENICODE)：本项目的基础来源
- TinyZ / yiliqi78：TOKENICODE 原作者
- [Tauri](https://tauri.app)：桌面应用框架
- [React](https://react.dev)：前端 UI 框架
- Claude Code 生态：提供 agent 工作流基础
