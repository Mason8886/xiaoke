# XiaoKe (小克)

一个基于 [TOKENICODE](https://github.com/yiliqi78/TOKENICODE) 的 Claude Code 桌面 GUI 客户端。

> 本项目基于 TOKENICODE 修改而来。感谢原作者 TinyZ / yiliqi78 以及 TOKENICODE 项目的开源工作。本仓库保留原项目 Apache License 2.0 授权与 attribution，详见 [LICENSE](LICENSE) 和 [NOTICE](NOTICE)。

## 功能

XiaoKe 是 Claude Code CLI 的桌面 GUI 封装，提供：

- **Claude Code CLI 集成** — 通过 Tauri 2 子进程管理 Claude Code CLI，支持 NDJSON 流式输出
- **多会话标签页** — 同时运行多个对话，支持切换、归档、置顶、导出
- **文件浏览器** — 内置文件树、预览（Markdown/HTML/SVG/PDF/图片）、CodeMirror 编辑器
- **API Provider 系统** — 支持 Anthropic、OpenAI 兼容格式、自定义 API 端点
- **Skills 面板** — 管理 Claude Code Skills、Codex Skills
- **MCP 管理** — 扫描、导入、管理 MCP 服务器配置
- **权限控制** — 通过 SDK Control Protocol 处理权限请求
- **回退 (Rewind)** — 支持对话轮次回退
- **计划模式** — 支持 Claude Code 的计划/代码/询问/全自动模式
- **中英双语** — 完整的 i18n 支持

## 与原项目的关系

这是 TOKENICODE 的独立分支，已移除原项目的更新端点和签名密钥。核心桌面框架、Claude Code GUI 思路和大量基础功能来自原 TOKENICODE 项目。

若你需要原版功能或官方更新，请参考原项目仓库：[https://github.com/yiliqi78/TOKENICODE](https://github.com/yiliqi78/TOKENICODE)

## 许可证

本项目沿用原项目的 **Apache License 2.0**。

请阅读：
- [LICENSE](LICENSE)
- [NOTICE](NOTICE)

## 致谢

- [TOKENICODE](https://github.com/yiliqi78/TOKENICODE)：本项目的基础来源
- TinyZ / yiliqi78：TOKENICODE 原作者
- [Tauri](https://tauri.app)：桌面应用框架
- [React](https://react.dev)：前端 UI 框架
- Claude Code 生态：提供 agent 工作流基础
