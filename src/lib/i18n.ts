import { useSettingsStore } from '../stores/settingsStore';
import type { Locale } from '../stores/settingsStore';
import { modKey, fileManagerName, fileManagerNameEn } from './platform';
import { APP_NAME } from './edition';

// --- Translation dictionary ---

const messages: Record<Locale, Record<string, string>> = {
  zh: {
    // Common
    'common.cancel': '取消',
    'common.confirm': '确认',
    'confirm.exit': '确定要退出 小克 吗？正在运行的任务将被终止。',

    // Sidebar
    'sidebar.hide': '收起侧栏',
    'sidebar.newChat': '新任务',
    'sidebar.addProject': '添加文件夹',
    'sidebar.addProjectTitle': '添加现有文件夹创建项目',
    'sidebar.currentSession': '当前会话',
    'sidebar.lightMode': '浅色模式',
    'sidebar.darkMode': '深色模式',
    'sidebar.systemMode': '跟随系统',

    // ChatPanel
    'chat.showSidebar': '展开侧栏',
    'chat.running': '运行中',
    'chat.turn': '第',
    'chat.turns': '轮',
    'chat.toggleFiles': '切换文件面板',
    'chat.scrollToBottom': '滚动到底部',
    'chat.latest': '最新',
    'chat.welcome': `欢迎使用 ${APP_NAME}`,
    'chat.welcomeWithProject': '开始与 DeepSeek 协作，CLI 会话在后台无缝运行。',
    'chat.welcomeNoProject': '选择一个项目文件夹以开始。',

    // InputBar
    'input.working': 'DeepSeek 正在工作...',
    'input.followUp': '追加消息...',
    'input.placeholder': '给 DeepSeek 发消息...',
    'input.prefixPlaceholder': '输入参数...',
    'input.attachFiles': '附加文件',
    'input.projectFolder': '对话文件夹',
    'input.selectFolder': '选择对话文件夹',
    'input.attachedFiles': '[附加的文件]',
    'input.thinkOn': '已开启深度思考',
    'input.thinkOff': '已关闭深度思考',
    'think.off': '关闭思考',
    'think.low': '浅思考',
    'think.medium': '中思考',
    'think.high': '深思考',
    'think.max': '最深思考',
    'think.providerIgnored': '当前供应商可能不支持 thinking 设置',
    'input.shortcutHint': '⏎ 发送 · {mod}⏎ 换行',

    // MessageBubble
    'msg.thinking': '思考中...',
    'msg.terminal': '终端',
    'msg.readFile': '读取文件',
    'msg.writeFile': '写入文件',
    'msg.editFile': '编辑文件',
    'msg.search': '搜索',
    'msg.subAgent': '子代理',
    'msg.todo': '待办',
    'msg.webFetch': '网页',
    'msg.result': '结果',

    // ConversationList
    'conv.search': '搜索任务...',
    'conv.today': '今天',
    'conv.yesterday': '昨天',
    'conv.thisWeek': '本周',
    'conv.older': '更早',
    'conv.empty': '空任务',
    'conv.sessions': '个任务',
    'conv.noMatch': '没有匹配的任务',
    'conv.noConv': '暂无任务',
    'conv.refresh': '刷新',
    'conv.justNow': '刚刚',
    'conv.mAgo': '分钟前',
    'conv.hAgo': '小时前',
    'conv.dAgo': '天前',
    'conv.loadFailed': '加载任务失败',
    'conv.delete': '删除任务',
    'conv.rename': '重命名',
    'conv.revealInFinder': '在 {fileManager} 中显示',
    'conv.export': '导出',
    'conv.newChat': '新建任务',
    'conv.renamePrompt': '输入新名称',
    'conv.deleteConfirm': '确定删除此任务吗？',
    'conv.deleteConfirmDetail': '此操作不可撤销。',
    'conv.deleteAll': '删除全部任务',
    'conv.deleteAllConfirm': '确定删除「{project}」下的全部 {count} 个任务吗？',
    'conv.deleteAllConfirmDetail': '此操作不可撤销。',
    'conv.pin': '置顶',
    'conv.unpin': '取消置顶',
    'conv.archive': '归档',
    'conv.unarchive': '取消归档',
    'conv.showArchived': '显示归档',
    'conv.selectMode': '选择',
    'conv.selected': '已选 {n} 个',
    'conv.contentMatches': '内容匹配',
    'conv.searchingContent': '搜索会话内容...',

    // ExportMenu
    'export.title': '导出任务',
    'export.markdown': '导出为 Markdown',
    'export.markdownConversation': '导出纯对话',
    'export.json': '导出为 JSON',
    'export.success': '已导出到',

    // SecondaryPanel
    'panel.files': '文件',
    'panel.agents': '代理',
    'panel.settings': '设置',
    'panel.agentsSoon': 'Agent Teams（即将推出）',
    'panel.settingsSoon': '设置（即将推出）',
    'panel.preview': '预览',
    'panel.skills': '技能',
    'panel.plugins': '插件',
    'panel.close': '关闭面板',

    // PreviewPanel
    'preview.urlPlaceholder': '输入 URL 或 localhost...',
    'preview.back': '后退',
    'preview.forward': '前进',
    'preview.refresh': '刷新',
    'preview.open': '打开',
    'preview.external': '在浏览器中打开',
    'preview.snapshot': '采集当前预览状态',
    'preview.snapshotShort': '截图',
    'preview.snapshotReady': '已采集当前预览状态',
    'preview.snapshotEmpty': '页面已加载，但没有可读取的正文内容',
    'preview.crossOriginSnapshot': '跨域页面只能读取地址和视口信息，真实截图需要浏览器调试工具',
    'preview.loading': '加载中...',
    'preview.loadFailed': '页面加载失败',
    'preview.empty': '输入地址开始预览',

    // FileExplorer
    'files.title': '文件',
    'files.selectProject': '从下方输入栏选择一个项目以浏览文件',
    'files.changed': '已更改',
    'files.clearMarkers': '清除标记',
    'files.closePreview': '关闭预览',
    'files.refresh': '刷新',
    'files.noFiles': '未找到文件',
    'files.openVscode': '双击在 VS Code 中打开',
    'files.search': '搜索文件...',
    'files.revealInFinder': '在 {fileManager} 中显示',
    'files.openDefault': '使用默认应用打开',
    'files.share': '分享...',
    'files.shareToWechat': '分享到微信',
    'files.shareToWechatSuccess': '文件已复制，切换到微信窗口后按 Ctrl+V 粘贴发送',
    'files.shareToWechatFailed': '分享失败，请重试',
    'files.openVscodeShort': '在 VS Code 中打开',
    'files.preview': '预览',
    'files.source': '源码',
    'files.previewUnsupported': '此文件类型不支持预览',
    'files.binaryFile': '无法预览该文件',
    'files.imagePreview': '图片预览',
    'files.loading': '加载中...',
    'files.errorLoading': '加载文件失败',
    'files.lineCount': '行',
    'files.edit': '编辑',
    'files.save': '保存',
    'files.saving': '保存中...',
    'files.discard': '放弃',
    'files.unsavedChanges': '未保存的更改',
    'files.unsavedTitle': '未保存的更改',
    'files.unsavedMessage': '当前文件有未保存的更改，是否保存后切换？',
    'files.saveAndSwitch': '保存并切换',
    'files.discardChanges': '放弃更改',
    'files.newFile': '新建文件',
    'files.newFolder': '新建文件夹',
    'files.dropHere': '拖放文件到项目',
    'files.openExternal': '在系统查看器中打开',
    'files.insertToChat': '插入到聊天',
    'files.copyPath': '复制路径',
    'files.copyFile': '拷贝',
    'files.paste': '粘贴',
    'files.rename': '重命名',
    'files.delete': '删除',
    'files.deleteConfirm': '确定要将 "{name}" 移到回收站吗？',
    'files.deleteConfirmDir': '确定要将文件夹 "{name}" 及其所有内容移到回收站吗？',
    'files.toggleHidden': '显示/隐藏隐藏文件',

    // ProjectSelector
    'project.selectFolder': '选择项目文件夹',
    'project.selectBtn': '选择项目...',
    'project.directoryMissing': '项目文件夹已被移动或删除，请重新选择',
    'project.reselect': '重新选择',

    // Error classification
    'error.technicalSummary': '遇到了一个技术问题，通常重试即可解决。',
    'error.showDetails': '查看详情',
    'error.invalidKey': '🔑 API 密钥无效或已过期，请检查设置中的 API Key 是否正确。',
    'error.rateLimit': '⏳ 请求太频繁，请稍等几秒后重试。',
    'error.quotaExceeded': '💰 API 余额不足，请充值后重试。',
    'error.modelNotFound': '🤖 模型不存在或不可用，请在设置中切换其他模型。',
    'error.networkError': '🌐 网络连接失败，请检查网络设置或稍后重试。',
    'error.permissionDenied': '🚫 操作被拒绝，请检查权限设置。',
    'error.serviceUnavailable': '🔧 服务暂时繁忙，请稍后重试。',
    'error.cliNotInstalled': '⚙️ CLI 未正确安装，请在设置中重新安装。',
    'error.tokenLimit': '📏 对话太长了，请新建一个任务继续。',
    'error.genericFallback': '出了点问题，请稍后重试。',
    'error.cliExitedSilently': 'CLI 意外退出且无输出，请检查 CLI 是否已正确安装（设置 → CLI），以及 API 服务商是否已配置。',

    // CommandPalette
    'cmd.newChat': '新任务',
    'cmd.newChatDesc': '开始新任务',
    'cmd.toggleSidebar': '切换侧栏',
    'cmd.toggleSidebarDesc': '显示或隐藏侧栏',
    'cmd.toggleFiles': '切换文件面板',
    'cmd.toggleFilesDesc': '显示或隐藏文件浏览器',
    'cmd.showFiles': '显示文件',
    'cmd.showFilesDesc': '打开文件浏览器',
    'cmd.showAgents': '显示代理',
    'cmd.showAgentsDesc': '打开 Agent Teams 面板',
    'cmd.toggleTheme': '切换主题',
    'cmd.toggleThemeDesc': '在浅色、深色和跟随系统之间切换',
    'cmd.placeholder': '输入命令...',
    'cmd.noMatch': '没有匹配的命令',
    'cmd.chat': '任务',
    'cmd.view': '视图',
    'cmd.settings': '设置',

    // ModeSelector
    'mode.code': '标准自动',
    'mode.ask': '询问',
    'mode.plan': '计划',
    'mode.bypass': '全自动',

    // Activity status
    'chat.thinking': '思考中...',
    'chat.writing': '输出中...',
    'chat.runningTool': '运行工具',
    // Cycling thinking words (typewriter animation)
    'chat.thinkingCycle.0': '思考中',
    'chat.thinkingCycle.1': '计算中',
    'chat.thinkingCycle.2': '优化中',
    'chat.thinkingCycle.3': '迭代中',
    'chat.thinkingCycle.4': '调试中',
    'chat.thinkingCycle.5': '涂鸦中',
    'chat.thinkingCycle.6': '摸鱼中',
    'chat.thinkingCycle.7': '发呆中',
    'chat.thinkingCycle.8': '找猫粮中',
    'chat.thinkingCycle.9': '划水中',
    'chat.thinkingCycle.10': '喝咖啡中',
    'chat.thinkingCycle.11': '数羊中',
    'chat.thinkingCycle.12': '搬砖中',
    'chat.thinkingCycle.13': '冥想中',
    'chat.thinkingCycle.14': '加载灵感中',
    'chat.thinkingCycle.15': '挠头中',
    'chat.thinkingCycle.16': '打盹中',

    // File upload
    'input.processingFiles': '处理中...',
    'input.stop': '终止',
    'input.awaitingInteraction': '等待交互响应',

    // Rewind
    'rewind.title': '回退',
    'rewind.confirm': '确认回退到第 {n} 轮',
    'rewind.current': '（当前）',
    'rewind.noChanges': '无代码变更',
    'rewind.restoreConversation': '仅恢复任务',
    'rewind.restoreAll': '恢复代码和任务',
    'rewind.restoreCode': '仅恢复代码',
    'rewind.summarize': '从此处创建摘要',
    'rewind.cancel': '取消',
    'rewind.success': '已回退到第 {n} 轮（仅对话）。发送新消息将自动恢复。',
    'rewind.successAll': '已回退到第 {n} 轮（代码和对话均已恢复）。',
    'rewind.successAllNoFiles': '已回退到第 {n} 轮（对话已恢复，代码恢复不可用）。',
    'rewind.successCode': '已恢复到第 {n} 轮的代码状态（对话保持不变）。',
    'rewind.restoring': '正在恢复文件…',
    'rewind.codeRestoreFailed': '代码恢复失败，请手动检查文件状态。',
    'rewind.summaryTitle': '第 {from}–{to} 轮摘要',
    'rewind.disabled': '运行中无法回退',
    'rewind.noCheckpoint': '历史对话无法恢复代码',

    // Markdown rich text
    'msg.copyCode': '复制',
    'msg.copyText': '复制',
    'msg.copied': '已复制！',
    'msg.imgError': '图片加载失败',
    'msg.openLink': '在浏览器打开',

    // Permission / Plan interactive UI
    'msg.permissionTitle': '权限请求',
    'msg.allow': '允许',
    'msg.deny': '拒绝',
    'msg.responded': '已响应',
    'msg.planTitle': '执行计划',
    'msg.planSteps': '个步骤',
    'msg.viewPlan': '查看 Plan',
    'msg.noPlan': '暂无 Plan',
    'msg.questionTitle': '请选择',
    'msg.questionSubmit': '确认',
    'msg.questionNext': '下一个',
    'msg.questionSkip': '跳过',
    'msg.questionOther': '其他',
    'msg.questionOtherPlaceholder': '输入自定义回答...',
    'msg.questionLoading': '正在加载...',
    'msg.planReview': '审查 DeepSeek 的计划',
    'msg.planApprove': '批准计划并开始执行',
    'msg.planModify': '告诉 DeepSeek 如何修改',
    'msg.planApproved': '计划已批准',
    'msg.planLabel': '计划',
    'chat.awaiting': '等待输入...',
    'chat.tokenWarning': '上下文即将满载，建议 /compact',
    'chat.autoCompacting': '上下文接近上限，自动压缩中...',
    'chat.stallWarning': '任务仍在运行中，复杂任务可能需要较长时间。若界面持续无任何变化，可停止后重试',

    // Agent panel
    'agents.title': '代理',
    'agents.main': '主代理',
    'agents.subAgent': '子代理',
    'agents.empty': '发送消息后查看代理活动',
    'agents.active': '活跃',
    'agents.toggle': '代理活动',
    'agents.spawning': '启动中...',
    'agents.thinking': '思考中...',
    'agents.writing': '输出中...',
    'agents.runningTool': '运行工具',
    'agents.completed': '已完成',
    'agents.error': '出错',

    // WelcomeScreen
    'welcome.newChat': '选择文件夹',
    'welcome.subtitle': '选择一个项目文件夹以开始',
    'welcome.recentProjects': '最近项目',

    // Settings
    'settings.title': '设置',
    'settings.aiAvatar': 'AI 头像',
    'settings.aiAvatarChange': '点击更换头像',
    'settings.aiAvatarReset': '恢复默认',
    'settings.aiAvatarCrop': '修改头像',
    'settings.aiAvatarCancel': '取消',
    'settings.aiAvatarSave': '保存',
    'settings.userAvatar': '用户头像',
    'settings.userAvatarChange': '点击更换头像',
    'settings.userAvatarReset': '恢复默认头像',
    'settings.userNamePlaceholder': '输入昵称',
    'settings.colorTheme': '主题颜色',
    'settings.black': '黑色',
    'settings.orange': '橘色',
    'settings.green': '绿色',
    'settings.blue': '蓝色',
    'settings.appearance': '外观',
    'settings.light': '浅色',
    'settings.dark': '深色',
    'settings.system': '跟随系统',
    'settings.language': '语言',
    'settings.defaultModel': '默认模型',
    'settings.fontSize': '字体大小',
    'settings.fontSizeHint': '{mod}+/- 快捷调整，{mod}+0 重置',
    'settings.fontFamily': '界面字体',
    'settings.fontFamilyHint': '如果某个字体未安装，系统会自动使用后备字体。',
    'settings.monoFontFollowsInterface': '等宽区域跟随界面字体',
    'settings.advanced': '高级设置',
    'settings.tab.general': '通用',
    'settings.tab.provider': 'API 提供商',
    'settings.tab.cli': 'CLI 管理',
    'settings.tab.mcp': 'MCP 服务器',
    'settings.footer.changelog': '更新日志',
    'settings.footer.checkUpdate': '检查更新',
    'settings.footer.upToDate': '已是最新',

    // Provider
    'provider.title': 'API 提供商',
    'provider.inherit': '继承系统配置',
    'provider.inheritDesc': '使用外部工具（如 CC-Switch）或系统环境变量的配置',
    'provider.addNew': '新增提供商',
    'provider.addProvider': '新增',
    'provider.official': '官方',
    'provider.customApi': '自定义 API',
    'provider.editProvider': '编辑提供商',
    'provider.deleteProvider': '删除',
    'provider.providerName': '提供商名称',
    'provider.providerNamePlaceholder': '如 OpenRouter',
    'provider.baseUrl': 'API 端点',
    'provider.baseUrlPlaceholder': 'https://api.example.com',
    'provider.apiKey': 'API Key',
    'provider.apiKeyPlaceholder': '输入 API Key...',
    'provider.getApiKey': '获取 Key →',
    'provider.format': 'API 格式',
    'provider.formatAnthropic': 'Anthropic Messages（原生）',
    'provider.formatOpenai': 'OpenAI Chat Completions',
    'provider.formatHint': '大多数第三方提供商使用 OpenAI 格式。Anthropic 官方直连使用 Anthropic 格式。',
    'provider.modelMappings': '模型映射',
    'provider.modelMappingsHint': '填写提供商的模型名，至少填一个用于测试连接',
    'provider.opusModel': 'DeepseekV4Pro',
    'provider.sonnetModel': 'DeepseekV4Flash',
    'provider.haikuModel': 'DeepseekV4Flash',
    'provider.opusPlaceholder': '如 DeepseekV4Pro',
    'provider.sonnetPlaceholder': '如 DeepseekV4Flash',
    'provider.haikuPlaceholder': '如 DeepseekV4Flash',
    'provider.modelIdPlaceholder': 'Model ID',
    'provider.providerModelPlaceholder': '供应商模型名',
    'provider.addModelMapping': '添加新模型',
    'provider.extraModelPlaceholder': '如 google/gemini-2.5-pro',
    'provider.proxyUrl': '代理地址',
    'provider.proxyUrlPlaceholder': '如 http://127.0.0.1:7890',
    'provider.proxyUrlHint': '部分渠道（如 OpenRouter）有地区限制，填写本地代理地址可绕过。留空则使用系统代理。',
    'provider.extraEnv': '环境变量',
    'provider.extraEnvHint': '注入到 CLI 进程的自定义环境变量。空值表示删除该变量。',
    'provider.extraEnvValuePlaceholder': '值（留空=删除）',
    'provider.addEnvVar': '添加',
    'provider.testConnection': '测试连接',
    'provider.testing': '测试中...',
    'provider.testSuccess': '连接成功',
    'provider.testFailed': '测试失败（部分渠道限制请求来源，可直接发送消息测试）',
    'provider.testNoModel': '请先填写至少一个模型名',
    'provider.testNoKey': '请先填写 API Key',
    'provider.testAuthError': '认证失败，请检查 API Key',
    'provider.testConnectivity': '连通性',
    'provider.testAuth': '认证',
    'provider.testModel': '模型',
    'provider.testSkipped': '跳过',
    'provider.noModelMapping': '当前提供商「{provider}」未配置 {tier} 模型映射，请到设置 → API 提供商中填写对应的模型名。',
    'provider.importConfig': '导入配置',
    'provider.exportConfig': '导出配置',
    'provider.importTitle': '选择 API 配置文件',
    'provider.exportTitle': '导出 API 配置',
    'provider.importSuccess': '导入成功',
    'provider.exportSuccess': '已导出',
    'provider.unnamed': '未命名',
    'provider.fromPreset': '从预设创建',
    'provider.fromPresetTitle': '从预设创建',
    'provider.customConfig': '自定义配置',
    'provider.importFile': '导入 JSON 文件',
    'provider.alreadyAdded': '已添加',
    'provider.deleteConfirm': '确定删除「{name}」吗？API Key 等配置将永久删除。',
    'provider.formatAnthropicShort': 'Anthropic 格式',
    'provider.formatOpenaiShort': 'OpenAI 格式',

    // Slash commands
    'slash.commands': '命令',
    'slash.global': '全局',
    'slash.project': '项目',
    'slash.hasArgs': '需要参数',
    'slash.noMatch': '没有匹配的命令',
    'slash.builtin': '内置命令',
    'slash.skills': '技能',
    'slash.immediate': '即时',
    'slash.projectCommands': '项目命令',
    'slash.globalCommands': '全局命令',
    'slash.projectSkills': '项目技能',
    'slash.globalSkills': '全局技能',

    // Builtin command descriptions
    'slash.desc.ask': '提问但不修改代码',
    'slash.desc.bug': '报告 Claude Code 问题',
    'slash.desc.clear': '清空任务历史',
    'slash.desc.compact': '压缩任务以减少上下文',
    'slash.desc.context': '管理上下文文件和目录',
    'slash.desc.cost': '显示会话费用和 Token 用量',
    'slash.desc.doctor': '检查 Claude Code 运行状态',
    'slash.desc.export': '导出任务为 Markdown',
    'slash.desc.help': '显示可用命令',
    'slash.desc.init': '初始化项目配置',
    'slash.desc.mcp': '管理 MCP 服务器连接',
    'slash.desc.memory': '查看或编辑 MEMORY.md',
    'slash.desc.permissions': '查看和管理工具权限',
    'slash.desc.plan': '进入 Plan 模式以规划复杂任务',
    'slash.desc.rename': '重命名当前会话',
    'slash.desc.rewind': '回退到之前的任务轮次',
    'slash.desc.stats': '显示会话统计信息',
    'slash.desc.statusline': '配置状态栏显示',
    'slash.desc.tasks': '查看后台运行中的任务',
    'slash.desc.teleport': '将上下文传送到新会话',
    'slash.desc.todos': '查看会话中的待办事项',
    'slash.desc.usage': '显示详细的 Token 用量明细',

    // Command feedback
    'cmd.switchedToAsk': '已切换到询问模式（仅回答问题，不修改代码）',
    'cmd.switchedToPlan': '已切换到计划模式（规划任务，不直接执行）',
    'cmd.switchedToCode': '已切换到标准自动模式（自动接受编辑，敏感操作仍会确认）',
    'cmd.switchedToBypass': '已切换到全自动模式（跳过权限检查，下一次发送会自动重启会话生效）',
    'cmd.compacting': '正在压缩上下文...',
    'cmd.noActiveSession': '没有活跃的会话。请先发送一条消息。',
    'cmd.costTitle': '会话费用',
    'cmd.costModel': '模型',
    'cmd.costAmount': '费用',
    'cmd.costDuration': '时长',
    'cmd.costTurns': '轮次',
    'cmd.costTokens': 'Token 用量',
    'cmd.helpTitle': '可用命令',
    'cmd.helpCustom': '自定义命令',
    'cmd.helpSkills': '技能',
    'cmd.bugReport': '请访问 https://github.com/anthropics/claude-code/issues 报告问题。',
    'cmd.unknownCommand': '未知命令',
    'cmd.noSessionData': '暂无会话数据，请先发送一条消息。',
    'cmd.usageTitle': 'Token 用量',
    'cmd.usageCurrentTurn': '当前轮次',
    'cmd.usageTotalSession': '会话累计',
    'cmd.usageInput': '输入',
    'cmd.usageOutput': '输出',
    'cmd.usageTotal': '合计',
    'cmd.usageOfficialHint': '订阅配额详情请在终端中运行 claude 并输入 /usage 查看。',
    'cmd.renamed': '已重命名为「{name}」',
    'cmd.renameNoArgs': '请提供新名称。用法: /rename <name>',
    'cmd.exportNoPath': '会话尚未保存到磁盘，无法导出。',
    'cmd.cliRunning': '正在执行...',
    'cmd.cliDone': '执行完成',
    'cmd.doctorTitle': '健康检查',
    'cmd.doctorCli': 'CLI 路径',
    'cmd.doctorVersion': '版本',
    'cmd.doctorAuth': '认证状态',
    'cmd.doctorAuthOk': '已登录',
    'cmd.doctorAuthFail': '未登录',
    'cmd.doctorNotInstalled': 'Claude CLI 未安装',
    'cmd.initCreated': '已创建 CLAUDE.md',
    'cmd.initExists': 'CLAUDE.md 已存在',
    'cmd.initNoDir': '请先选择项目目录',
    'cmd.memoryTitle': '项目记忆 (CLAUDE.md)',
    'cmd.memoryEmpty': '当前项目中未找到 CLAUDE.md 文件',
    'cmd.memoryNoDir': '请先选择项目目录',
    'cmd.permissionsTitle': '权限信息',
    'cmd.permissionsHint': '权限由 Claude CLI 会话管理，请在终端中运行 claude permissions 查看详情。',
    'cmd.mcpTitle': 'MCP 服务器',
    'cmd.mcpHint': 'MCP 服务器由 Claude CLI 管理，请在终端中运行 claude mcp 查看详情。',

    // Command processing card
    'cmd.processing': '正在执行',
    'cmd.processingDone': '执行完成',
    'cmd.elapsed': '耗时',
    'cmd.showOutput': '查看输出',
    'cmd.hideOutput': '收起输出',

    // Plan review enhancements
    'msg.planStepCount': '{n} 个步骤',
    'msg.planApproveHint': '批准 (Enter)',
    'msg.planCollapsed': '计划已批准 — 点击展开',
    'msg.planReady': '计划已就绪，等待审批',
    'msg.planApproveAndExecute': '批准并执行',
    'msg.switchToCode': '切换到 Code 模式',

    // Permission enhancements
    'msg.permissionAllowHint': '允许 (y)',
    'msg.permissionDenyHint': '拒绝 (n)',
    'msg.permissionCommand': '命令',

    // Question enhancements
    'msg.questionProgress': '问题 {current} / {total}',

    // Tool group
    'msg.toolGroup': '{n} 个工具调用',
    'msg.toolGroupSummary': '{summary}',
    'msg.toolGroupExpand': '展开',
    'msg.toolGroupCollapse': '收起',

    // Slash command execution types
    'slash.cli': 'CLI',
    'slash.session': '会话',

    // Skills panel
    'skills.title': '技能',
    'skills.refresh': '刷新',
    'skills.create': '创建',
    'skills.cancel': '取消',
    'skills.edit': '编辑',
    'skills.save': '保存',
    'skills.saving': '保存中...',
    'skills.discard': '放弃',
    'skills.delete': '删除',
    'skills.loading': '加载中...',
    'skills.empty': '暂无技能，点击 + 创建',
    'skills.namePlaceholder': '输入技能名称...',
    'skills.global': '全局',
    'skills.project': '项目',
    'skills.confirmDelete': '确定删除此技能吗？',
    'skills.viewEdit': '编辑',
    'skills.viewPreview': '预览',
    'skills.viewSplit': '分屏',
    'skills.unsaved': '未保存',
    'skills.search': '搜索技能...',
    'skills.useInInput': '在输入框中使用',
    'skills.enable': '启用',
    'skills.disable': '禁用',
    'skills.duplicate': '复制',
    'skills.revealInFinder': '在 {fileManager} 中显示',
    'skills.tools': '工具',
    'skills.model': '模型',
    'skills.context': '上下文',
    'skills.version': '版本',

    // MCP panel
    'panel.mcp': 'MCP',
    'mcp.title': 'MCP 服务器',
    'mcp.add': '添加',
    'mcp.edit': '编辑',
    'mcp.delete': '删除',
    'mcp.name': '名称',
    'mcp.command': '命令',
    'mcp.args': '参数',
    'mcp.env': '环境变量',
    'mcp.type': '类型',
    'mcp.noServers': '暂无 MCP 服务器',
    'mcp.confirmDelete': '确定删除此 MCP 服务器吗？',
    'mcp.save': '保存',
    'mcp.cancel': '取消',
    'mcp.envHint': '每行一个，格式: KEY=VALUE',
    'mcp.argsHint': '每行一个参数',
    'mcp.namePlaceholder': '输入服务器名称...',
    'mcp.commandPlaceholder': '输入命令，如 npx',
    'mcp.refresh': '刷新',
    'mcp.envCount': '个环境变量',

    // CLI Management
    'cli.check': '检查 CLI 状态',
    'cli.checking': '检测中...',
    'cli.installed': '已安装',
    'cli.notFound': '未检测到 Claude Code CLI',
    'cli.versionIncompat': '⚠ 当前 CLI 版本过旧，部分功能可能不可用。建议点击「重新安装」升级到最新版',
    'cli.install': '安装 Claude Code',
    'cli.installing': '安装中...',
    'cli.installDone': '安装成功',
    'cli.installFail': '安装失败',
    'cli.retry': '重试',
    'cli.reinstall': '重新安装',
    'cli.pathHint': '安装后需要重新打开终端才能生效',
    'cli.configuring': '正在配置...',
    'cli.npmFallback': '通过 npm 镜像安装...',
    'cli.reinstallHint': '点击重新安装以修复',
    'cli.confirmReinstall': '确定要重新安装 CLI 吗？这将重新下载并替换当前的 CLI 二进制文件。',
    'cli.restart': '重启应用以生效',
    'cli.update': '更新 CLI',
    'cli.updating': '更新中...',
    'cli.updateDone': '更新成功',
    'cli.environment': 'CLI 环境',
    'cli.scanning': '扫描中...',
    'cli.noCliFound': '未发现 CLI 安装',
    'cli.rescan': '重新扫描',
    'cli.cleanAppLocal': '清理自部署版本',
    'cli.cleaning': '清理中...',
    'cli.source.official': '官方',
    'cli.source.system': '系统',
    'cli.source.appLocal': '自部署',
    'cli.source.versionManager': '版本管理器',
    'cli.source.dynamic': '环境变量',
    'cli.use': '使用此版本',
    'cli.pinned': '已选定',
    'cli.unpinned': '已取消选定',
    'cli.unpin': '取消选定',
    'cli.injectPath': '注入 PATH',
    'cli.delete': '删除',
    'cli.confirmDelete': '确定要删除此 CLI 吗？',
    'cli.inUse': '使用中',

    // Update
    'update.check': '检查更新',
    'update.checking': '检查中...',
    'update.available': '发现新版本',
    'update.latest': '已是最新版本',
    'update.downloading': '下载中...',
    'update.readyRestart': '更新已就绪，重启以完成安装',
    'update.restart': '重启应用',
    'update.error': '检查更新失败',
    'update.version': '新版本',
    'update.install': '下载并安装',

    // Network / firewall hints
    'network.firewallHint': '网络连接失败，可能需要 VPN 或代理才能访问',
    'error.permissionHint': '权限不足，请以管理员身份运行，或检查防病毒软件是否锁定了相关目录',

    // Changelog modal
    'changelog.title': '更新内容',
    'changelog.dismiss': '知道了',
    'changelog.view': '查看更新内容',

    // Setup wizard
    'setup.checking': '正在检测 Claude Code CLI...',
    'setup.notInstalled': '未检测到 Claude Code CLI',
    'setup.notInstalledDesc': `需要安装 Claude Code CLI 才能使用 ${APP_NAME}。`,
    'setup.install': '安装 Claude Code',
    'setup.installing': '正在安装...',
    'setup.installFailed': '安装失败',
    'setup.installFailedDesc': '自动安装未成功，请尝试手动安装。',
    'setup.retry': '重试',
    'setup.manualInstall': '手动安装说明',
    'setup.manualInstallCmd': '在终端中运行以下命令：',
    'setup.installed': 'Claude Code CLI 已安装',
    'setup.loginNeeded': '需要登录 Anthropic 账户',
    'setup.loginNeededDesc': '登录后即可开始使用 Claude Code。',
    'setup.login': '登录',
    'setup.loggingIn': '等待认证...',
    'setup.loggingInDesc': '浏览器窗口应已打开，请在浏览器中完成登录。',
    'setup.loggingInTerminalDesc': '已在终端中打开 claude login，请在终端中完成登录。登录成功后此页面会自动更新。',
    'setup.loginFailed': '登录失败',
    'setup.loginFailedDesc': '认证未成功，请重试。',
    'setup.ready': '一切就绪！',
    'setup.readyDesc': 'Claude Code CLI 已安装并登录，可以开始使用了。',
    'setup.start': '开始使用',
    'setup.skip': '跳过',
    'setup.version': '版本',
    'setup.gitBashMissing': '需要安装 Git for Windows',
    'setup.gitBashMissingDesc': 'Claude Code 在 Windows 上运行需要 Git Bash，正在自动安装...',
    'setup.downloadGitBash': '下载 Git for Windows',
    'setup.recheckGitBash': '已安装？点击重新检测',
    'setup.downloadingGit': '正在下载 Git for Windows...',
    'setup.extractingGit': '正在安装 Git...',
    'setup.downloadingNode': '正在下载 Node.js 运行环境...',
    'setup.extractingNode': '正在解压 Node.js...',
    'setup.preparingEnv': '正在准备运行环境...',
    'setup.installingCli': '正在通过 npm 安装 CLI...',
    'setup.nativeVersion': '正在获取最新版本...',
    'setup.nativeManifest': '正在校验文件信息...',
    'setup.nativeDownload': '正在下载 Claude Code...',
    'setup.nativeVerify': '正在验证文件完整性...',
    'setup.nativeInstall': '正在安装到系统...',
    'setup.npmFallback': '正在通过备用方式安装...',

    // Dashboard
    'dashboard.title': '小克工作台',
    'dashboard.card1': '一键创建 AI 项目需求文档',
    'dashboard.desc1': '快速生成结构化的项目需求文档，支持多种项目类型和模板',
    'dashboard.card2': '一键生成前端/后端开发计划',
    'dashboard.desc2': '自动分析需求并生成详细的前端或后端开发计划与任务分解',
    'dashboard.card3': '自动生成 Claude Code / Codex 修改指令',
    'dashboard.desc3': '根据需求或问题自动生成精准的 Claude Code 或 Codex 修改指令',
    'dashboard.card4': 'Skill 管理器中文化',
    'dashboard.desc4': '管理和编辑技能的中文界面，方便创建和组织自定义技能',
    'dashboard.card5': 'API Provider 可视化管理',
    'dashboard.desc5': '可视化管理多个 API 提供商配置，支持 Anthropic 和 OpenAI 兼容格式',
    'dashboard.card6': 'MCP 管理器',
    'dashboard.desc6': '集中管理 MCP 服务器连接，配置工具和资源',
    'dashboard.card7': 'GitHub 项目助手',
    'dashboard.desc7': '与 GitHub 仓库交互，管理 issues、PRs 和代码审查',
    'dashboard.hint': '点击卡片开始使用对应功能（功能陆续开放中）',
    'panel.dashboard': '工作台',

    // Dashboard prompt modals
    'dashboard.modalTitle1': '一键创建 AI 项目需求文档',
    'dashboard.modalTitle2': '一键生成前端/后端开发计划',
    'dashboard.modalTitle3': '自动生成 Claude Code / Codex 修改指令',
    'dashboard.modalTitle4': 'Skill 管理器中文化',
    'dashboard.modalTitle5': 'API Provider 可视化管理',
    'dashboard.modalTitle6': 'MCP 管理器',
    'dashboard.modalTitle7': 'GitHub 项目助手',
    'dashboard.prompt1': `你是一位资深产品经理。请帮我为以下项目生成一份专业的 AI 项目需求文档（PRD）。

【项目名称】（填写你的项目名称）
【项目类型】Web 应用 / 移动应用 / 桌面应用 / CLI 工具 / API 服务 / 其他
【目标用户】（描述谁会使用这个产品，他们的核心痛点是什么）
【核心功能】
1.
2.
3.
4.
5.
【技术栈偏好】（如 React + Node.js / Vue + Python / Rust + Tauri / Next.js 等）
【特殊约束】（如多语言、无障碍访问、离线支持、合规要求等）

请按以下结构生成 PRD，并保存为 PRD.md：

## 1. 项目概述与背景
- 一句话描述项目是什么
- 解决什么问题（用户痛点）
- 与现有方案的差异化

## 2. 目标用户画像
- 主要用户群体及特征
- 每个群体的核心使用场景

## 3. 核心功能列表
- 按 P0/P1/P2 优先级排列
- 每个功能用 1-2 句话描述

## 4. 用户流程
- 核心用户旅程（可用文字或简单的 ASCII 流程图描述）

## 5. 页面/模块结构
- 列出主要页面或模块及其职责

## 6. 数据模型概要
- 核心实体及其关键字段
- 实体之间的关系

## 7. 技术栈建议
- 推荐的前端/后端技术及理由（考虑团队规模、项目周期）
- 是否需要 AI/ML 能力

## 8. MVP 范围
- 第一版必须包含的功能
- 明确排除的功能

## 9. 风险与假设
- 关键技术风险
- 产品假设及验证方式

## 10. 里程碑建议
- 建议的开发阶段和时间估算

请用中文输出，技术术语可保留英文。`,
    'dashboard.prompt2': `你是一位资深全栈工程师。请帮我为以下项目生成详细的开发计划。

【项目需求描述】
（请在此处粘贴或描述你的项目需求）

【开发方向】前端 / 后端 / 全栈

请先快速浏览项目现有代码结构，然后按以下结构生成开发计划：

## 1. 技术选型建议
- 推荐的前端框架 / 后端框架及理由
- 数据库选型建议
- 关键第三方服务/库推荐

## 2. 项目目录结构
- 推荐的目录组织方式
- 各目录职责说明

## 3. 前端开发计划（如适用）
- 页面清单与路由设计
- 组件树结构（核心组件及其关系）
- 状态管理方案
- UI/UX 注意事项

## 4. 后端开发计划（如适用）
- API 接口设计（RESTful 或 GraphQL）
- 中间件/拦截器设计
- 数据模型设计（核心表/集合及其字段）
- 认证与授权方案（如需要）

## 5. 开发阶段与里程碑
- 按优先级划分开发阶段
- 每个阶段的任务分解及预估工时
- 阶段间的依赖关系

## 6. 测试计划
- 单元测试策略
- 集成测试策略
- 端到端测试关键场景

## 7. 关键风险与应对方案
- 技术风险
- 进度风险
- 第三方依赖风险

请将输出保存为以下文件：
- frontend-plan.md（前端部分）
- backend-plan.md（后端部分）
- api-design.md（API 设计）

请用中文输出，技术术语可保留英文。`,
    'dashboard.prompt3': `你是一位谨慎的软件工程师。请帮我根据以下需求生成安全的 Claude Code / Codex 修改指令。

【需求/问题描述】
（请在此处描述你想要实现的功能或修复的问题）

【约束条件】
- 保持现有 API 兼容性：是 / 否
- 需要添加测试：是 / 否
- 需要更新文档：是 / 否

请按以下步骤操作：

## 第一步：检查项目结构
先浏览项目目录结构和关键文件，了解现有代码组织方式。

## 第二步：分析影响范围
- 列出所有需要修改的文件
- 标注每个文件的修改类型（新增 / 编辑 / 删除）
- 评估修改之间的依赖关系

## 第三步：生成修改指令
对每个文件，给出具体的修改指令：
- 对于新增：说明在哪里创建文件、文件内容概要
- 对于编辑：说明要修改的位置（函数/类/区块）和修改内容
- 对于删除：说明要删除的内容及原因

### 重要原则：
- 每次只做小范围、渐进式的修改
- 避免大规模重写
- 每完成一个步骤后运行测试或构建验证
- 每步修改后总结变更了哪些文件

## 第四步：验证计划
- 列出每个步骤完成后的验证命令
- 如 npm run build / cargo check / npx tsc --noEmit / pytest 等

## 第五步：总结
- 汇总所有变更文件清单
- 标注潜在的副作用和回滚方案

请用中文输出，生成可直接复制到 Claude Code 或 Codex 中执行的指令。`,
    'dashboard.prompt4': `你是一位技术文档中文化专家。请帮我审查和组织项目中的 Skill 配置。

请按以下步骤操作：

## 第一步：检查 Skill 目录
先扫描以下位置找到所有 Skill 文件：
- .claude/skills/ （项目级 Skill）
- ~/.claude/skills/ （全局 Skill）
列出所有找到的 Skill 及其文件路径。

## 第二步：逐一分析每个 Skill
对每个 Skill，用中文解释：
- Skill 的名称和用途
- 触发条件和适用场景
- 主要工具和模型配置
- 输入输出格式

## 第三步：中文化建议
- 将 Skill 名称、描述翻译为地道的中文
- 翻译重要的使用说明和提示词
- 保留技术术语的英文原文（如 API、JSON、MCP、SDK 等）
- 保留所有代码、命令和配置值不变

## 第四步：组织优化
- 识别重复或低价值的 Skill，给出合并或删除建议
- 建议 Skill 的分类和命名规范
- 提出目录结构调整建议

## 第五步：输出报告
生成一份 SkillManageReport.md，包含：
- Skill 清单及中文说明
- 中文化翻译对照表
- 优化建议（重复/低价值/命名改进）
- 推荐的组织结构

### 安全提示：
- 不要删除任何文件，除非用户明确确认
- 修改前先备份原文件
- 所有建议需经用户审核后才能执行`,
    'dashboard.prompt5': `你是一位 API 配置安全专家。请帮我审查和管理项目中的 API Provider 配置。

请按以下步骤操作：

## 第一步：检查 Provider 配置
先找到并读取 Provider 配置文件（通常在 ~/.xiaoke/providers.json 或项目设置中）。
列出所有已配置的 Provider。

## 第二步：逐一分析每个 Provider
对每个 Provider，用中文解释：
- Provider 名称和 API 格式（Anthropic / OpenAI Compatible）
- Base URL 的实际指向（是否官方、是否代理）
- 模型映射关系（Opus/Sonnet/Haiku 分别映射到哪个实际模型）
- API Key 的存储位置（环境变量 / 配置文件 / 系统密钥链）

## 第三步：安全检查
- 检查配置文件中是否存在硬编码的 API Key
- 检查 API Key 是否有泄露风险（如被提交到 git）
- 检查 .gitignore 是否排除了敏感配置文件
- 检查代理设置是否安全

## 第四步：优化建议
- 建议安全的 Provider 预设方案
- 推荐使用环境变量而非配置文件存储 API Key
- 如有多余或重复的 Provider，建议清理
- 对不安全的配置给出具体的修复步骤

### 安全警告：
- 绝对不要输出或记录任何 API Key 的明文
- 绝对不要将 API Key 写入任何可能被提交的文件
- 如发现泄露风险，立即提醒并给出补救方案`,
    'dashboard.prompt6': `你是一位 MCP 配置安全专家。请帮我审查和管理项目中的 MCP (Model Context Protocol) 服务器配置。

请按以下步骤操作：

## 第一步：检查 MCP 配置
先找到并读取 MCP 配置文件（通常在 .mcp.json 或 ~/.claude.json 中）。
列出所有已配置的 MCP 服务器及其基本信息。

## 第二步：逐一分析每个 MCP 服务器
对每个 MCP 服务器，用中文解释：
- 服务器名称和用途（它提供什么能力）
- 服务器类型（stdio / SSE / streamable HTTP）
- 启动命令和参数的完整性
- 环境变量的作用和必要性

## 第三步：安全检查
- 检查启动命令是否存在（npx / python / node 等是否已安装）
- 检查命令参数是否安全（是否有潜在的注入风险）
- 检查环境变量中是否包含敏感信息（Token / Key / Secret）
- 识别哪些 MCP 服务器拥有高风险权限（如 shell 执行、文件写入、网络访问）

## 第四步：配置优化
- 如有多个 MCP 服务器，建议合理的加载顺序
- 对高风险权限的服务器，建议限制其作用范围
- 检查是否存在已知的兼容性问题或版本冲突
- 给出安全的安装和配置步骤

## 第五步：输出报告
生成一份 McpAuditReport.md，包含：
- MCP 服务器清单及中文说明
- 安全风险评估（高/中/低）
- 配置优化建议
- 安装验证步骤

### 安全提示：
- MCP 服务器可能拥有读写文件、执行命令、访问网络的权限
- 仅安装来自可信来源的 MCP 服务器
- 定期审查 MCP 服务器的权限范围`,
    'dashboard.prompt7': `你是一位 GitHub 项目管理助手。请帮我分析和管理 GitHub 仓库。

请按以下步骤操作：

## 第一步：了解项目
先读取项目的关键文件来了解项目：
- README.md（项目概述、安装和使用说明）
- package.json / Cargo.toml / go.mod 等（技术栈和依赖）
- src/ 或主要源码目录结构
- 如有 .github/ 目录，检查 CI/CD 和模板配置

## 第二步：项目概况总结
用中文总结：
- 项目定位和核心功能
- 技术架构（前端/后端/数据库）
- 代码组织结构
- 主要依赖和关键第三方库

## 第三步：代码健康检查
- 识别代码质量问题（重复代码、过长函数、过度耦合）
- 检查是否有明显的安全风险
- 评估测试覆盖率（如有测试文件）
- 检查依赖是否有已知漏洞（如有 lock 文件）

## 第四步：Issues / PRs 分析（如有访问权限）
- 对 Open Issues 进行分类和优先级排序
- 识别长期未解决的 Issues 并分析原因
- 对 Open PRs 进行代码审查（质量、安全性、性能）
- 标注需要重点关注的问题

## 第五步：开发建议
- 建议接下来的开发任务（按优先级排列）
- 生成合适的 Commit Message 和 PR 描述建议
- 如有技术债务，给出偿还建议

## 第六步：输出报告
生成一份 ProjectReport.md，包含项目摘要、风险评估和行动建议。

请用中文输出，仓库名、分支名、命令等保留英文。`,

    'dashboard.tip1': '💡 使用提示：先填写方括号中的占位信息，然后点击「复制提示词」，粘贴到 Claude Code 或 Codex 对话中执行。',
    'dashboard.tip2': '💡 使用提示：如果你的项目已有代码，AI 会先浏览项目结构再生成计划。建议在已有项目目录下使用。',
    'dashboard.tip3': '💡 使用提示：这个 prompt 会引导 AI 先检查项目结构、再逐步生成修改指令。适合需要安全、渐进式修改的场景。',
    'dashboard.tip4': '💡 使用提示：AI 会扫描 .claude/skills/ 和全局 skills 目录，不会自动删除任何文件，所有修改需你确认。',
    'dashboard.tip5': '💡 使用提示：AI 会检查 ~/.xiaoke/providers.json 等配置文件，帮助你发现安全隐患，不会输出你的 API Key。',
    'dashboard.tip6': '💡 使用提示：AI 会检查 .mcp.json 或 ~/.claude.json 中的 MCP 配置，评估每个服务器的权限风险。',
    'dashboard.tip7': '💡 使用提示：AI 会先读取 README、package.json、源码目录等关键文件来理解项目，然后生成结构化的分析报告。',
    'dashboard.copyPrompt': '复制提示词',
    'dashboard.copied': '已复制到剪贴板',
    'dashboard.closeModal': '关闭',

    // Permission dialog
    'perm.title': '需要文件访问权限',
    'perm.desc': `${APP_NAME} 需要「完整磁盘访问」权限才能正常读写项目文件。请在系统设置中授权，否则部分功能可能受限。`,
    'perm.openSettings': '打开系统设置',
    'perm.later': '稍后设置',
    'perm.path': '系统设置 → 隐私与安全性 → 完整磁盘访问',
  },

  en: {
    // Common
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'confirm.exit': 'Are you sure you want to quit XiaoKe? Running tasks will be terminated.',

    // Sidebar
    'sidebar.hide': 'Hide sidebar',
    'sidebar.newChat': 'New Task',
    'sidebar.addProject': 'Add folder',
    'sidebar.addProjectTitle': 'Add existing folder as project',
    'sidebar.currentSession': 'Current Session',
    'sidebar.lightMode': 'Light Mode',
    'sidebar.darkMode': 'Dark Mode',
    'sidebar.systemMode': 'System',

    // ChatPanel
    'chat.showSidebar': 'Show sidebar',
    'chat.running': 'Running',
    'chat.turn': 'Turn',
    'chat.turns': 'turns',
    'chat.toggleFiles': 'Toggle file panel',
    'chat.scrollToBottom': 'Scroll to bottom',
    'chat.latest': 'Latest',
    'chat.welcome': `Welcome to ${APP_NAME}`,
    'chat.welcomeWithProject': 'Start working with DeepSeek. Your CLI session runs seamlessly in the background.',
    'chat.welcomeNoProject': 'Select a project folder to get started.',

    // InputBar
    'input.working': 'DeepSeek is working...',
    'input.followUp': 'Send follow-up...',
    'input.placeholder': 'Message DeepSeek...',
    'input.prefixPlaceholder': 'Enter arguments...',
    'input.attachFiles': 'Attach files',
    'input.projectFolder': 'Project folder',
    'input.selectFolder': 'Select project folder',
    'input.attachedFiles': '[Attached files]',
    'input.thinkOn': 'Extended thinking enabled',
    'input.thinkOff': 'Extended thinking disabled',
    'think.off': 'Think Off',
    'think.low': 'Think Low',
    'think.medium': 'Think Med',
    'think.high': 'Think High',
    'think.max': 'Think Max',
    'think.providerIgnored': 'This provider may not support thinking settings',
    'input.shortcutHint': '⏎ Send · {mod}⏎ New line',

    // MessageBubble
    'msg.thinking': 'Thinking...',
    'msg.terminal': 'Terminal',
    'msg.readFile': 'Read File',
    'msg.writeFile': 'Write File',
    'msg.editFile': 'Edit File',
    'msg.search': 'Search',
    'msg.subAgent': 'Sub-agent',
    'msg.todo': 'Todo',
    'msg.webFetch': 'Web',
    'msg.result': 'Result',

    // ConversationList
    'conv.search': 'Search tasks...',
    'conv.today': 'Today',
    'conv.yesterday': 'Yesterday',
    'conv.thisWeek': 'This Week',
    'conv.older': 'Older',
    'conv.empty': 'Empty task',
    'conv.sessions': 'tasks',
    'conv.noMatch': 'No matching tasks',
    'conv.noConv': 'No tasks yet',
    'conv.refresh': 'Refresh',
    'conv.justNow': 'just now',
    'conv.mAgo': 'm ago',
    'conv.hAgo': 'h ago',
    'conv.dAgo': 'd ago',
    'conv.loadFailed': 'Failed to load task',
    'conv.delete': 'Delete',
    'conv.rename': 'Rename',
    'conv.revealInFinder': 'Reveal in {fileManagerEn}',
    'conv.export': 'Export',
    'conv.newChat': 'New Task',
    'conv.renamePrompt': 'Enter new name',
    'conv.deleteConfirm': 'Delete this task?',
    'conv.deleteConfirmDetail': 'This action cannot be undone.',
    'conv.deleteAll': 'Delete All Tasks',
    'conv.deleteAllConfirm': 'Delete all {count} tasks in "{project}"?',
    'conv.deleteAllConfirmDetail': 'This action cannot be undone.',
    'conv.pin': 'Pin',
    'conv.unpin': 'Unpin',
    'conv.archive': 'Archive',
    'conv.unarchive': 'Unarchive',
    'conv.showArchived': 'Show Archived',
    'conv.selectMode': 'Select',
    'conv.selected': '{n} selected',
    'conv.contentMatches': 'Content matches',
    'conv.searchingContent': 'Searching content...',

    // ExportMenu
    'export.title': 'Export task',
    'export.markdown': 'Export as Markdown',
    'export.markdownConversation': 'Export conversation only',
    'export.json': 'Export as JSON',
    'export.success': 'Exported to',

    // SecondaryPanel
    'panel.files': 'Files',
    'panel.agents': 'Agents',
    'panel.settings': 'Settings',
    'panel.agentsSoon': 'Agent Teams (coming soon)',
    'panel.settingsSoon': 'Settings (coming soon)',
    'panel.preview': 'Preview',
    'panel.skills': 'Skills',
    'panel.plugins': 'Plugins',
    'panel.close': 'Close panel',

    // PreviewPanel
    'preview.urlPlaceholder': 'Enter URL or localhost...',
    'preview.back': 'Back',
    'preview.forward': 'Forward',
    'preview.refresh': 'Refresh',
    'preview.open': 'Open',
    'preview.external': 'Open in browser',
    'preview.snapshot': 'Capture current preview state',
    'preview.snapshotShort': 'Shot',
    'preview.snapshotReady': 'Preview state captured',
    'preview.snapshotEmpty': 'The page loaded, but no readable body text was found',
    'preview.crossOriginSnapshot': 'Cross-origin pages expose only URL and viewport here; real screenshots need a browser debugging tool',
    'preview.loading': 'Loading...',
    'preview.loadFailed': 'Failed to load page',
    'preview.empty': 'Enter an address to start previewing',

    // FileExplorer
    'files.title': 'Files',
    'files.selectProject': 'Select a project from the input bar below to browse files',
    'files.changed': 'changed',
    'files.clearMarkers': 'Clear markers',
    'files.closePreview': 'Close preview',
    'files.refresh': 'Refresh',
    'files.noFiles': 'No files found',
    'files.openVscode': 'Double-click to open in VS Code',
    'files.search': 'Search files...',
    'files.revealInFinder': 'Reveal in {fileManagerEn}',
    'files.openDefault': 'Open with Default App',
    'files.share': 'Share...',
    'files.shareToWechat': 'Share to WeChat',
    'files.shareToWechatSuccess': 'File copied. Switch to WeChat and press Ctrl+V to paste.',
    'files.shareToWechatFailed': 'Share failed. Please try again.',
    'files.openVscodeShort': 'Open in VS Code',
    'files.preview': 'Preview',
    'files.source': 'Source',
    'files.previewUnsupported': 'Preview not supported for this file type',
    'files.binaryFile': 'This file cannot be previewed',
    'files.imagePreview': 'Image preview',
    'files.loading': 'Loading...',
    'files.errorLoading': 'Failed to load file',
    'files.lineCount': 'lines',
    'files.edit': 'Edit',
    'files.save': 'Save',
    'files.saving': 'Saving...',
    'files.discard': 'Discard',
    'files.unsavedChanges': 'Unsaved changes',
    'files.unsavedTitle': 'Unsaved Changes',
    'files.unsavedMessage': 'This file has unsaved changes. Save before switching?',
    'files.saveAndSwitch': 'Save & Switch',
    'files.discardChanges': 'Discard',
    'files.newFile': 'New File',
    'files.newFolder': 'New Folder',
    'files.dropHere': 'Drop files into project',
    'files.openExternal': 'Open in system viewer',
    'files.insertToChat': 'Insert to chat',
    'files.copyPath': 'Copy path',
    'files.copyFile': 'Copy',
    'files.paste': 'Paste',
    'files.rename': 'Rename',
    'files.delete': 'Delete',
    'files.deleteConfirm': 'Move "{name}" to trash?',
    'files.deleteConfirmDir': 'Move folder "{name}" and all its contents to trash?',
    'files.toggleHidden': 'Show/Hide hidden files',

    // ProjectSelector
    'project.selectFolder': 'Select Project Folder',
    'project.selectBtn': 'Select project...',
    'project.directoryMissing': 'Project folder has been moved or deleted. Please select a new one.',
    'project.reselect': 'Reselect',

    // Error classification
    'error.technicalSummary': 'A technical issue occurred. Retrying usually resolves it.',
    'error.showDetails': 'Show details',
    'error.invalidKey': '🔑 API key is invalid or expired. Please check the API Key in settings.',
    'error.rateLimit': '⏳ Too many requests. Please wait a few seconds and try again.',
    'error.quotaExceeded': '💰 API balance is insufficient. Please top up and try again.',
    'error.modelNotFound': '🤖 Model not found or unavailable. Please switch to another model in settings.',
    'error.networkError': '🌐 Network connection failed. Please check your network settings or try again later.',
    'error.permissionDenied': '🚫 Operation was denied. Please check your permissions.',
    'error.serviceUnavailable': '🔧 Service is temporarily busy. Please try again later.',
    'error.cliNotInstalled': '⚙️ CLI is not properly installed. Please reinstall in settings.',
    'error.tokenLimit': '📏 Conversation is too long. Please start a new task to continue.',
    'error.genericFallback': 'Something went wrong. Please try again later.',
    'error.cliExitedSilently': 'CLI process exited unexpectedly without output. Please check that Claude CLI is installed correctly (Settings → CLI) and that your API provider is configured.',

    // CommandPalette
    'cmd.newChat': 'New Task',
    'cmd.newChatDesc': 'Start a new task',
    'cmd.toggleSidebar': 'Toggle Sidebar',
    'cmd.toggleSidebarDesc': 'Show or hide the sidebar',
    'cmd.toggleFiles': 'Toggle File Panel',
    'cmd.toggleFilesDesc': 'Show or hide the file explorer',
    'cmd.showFiles': 'Show Files',
    'cmd.showFilesDesc': 'Open the file explorer panel',
    'cmd.showAgents': 'Show Agents',
    'cmd.showAgentsDesc': 'Open the agent teams panel',
    'cmd.toggleTheme': 'Toggle Theme',
    'cmd.toggleThemeDesc': 'Switch between light, dark, and system theme',
    'cmd.placeholder': 'Type a command...',
    'cmd.noMatch': 'No matching commands',
    'cmd.chat': 'Task',
    'cmd.view': 'View',
    'cmd.settings': 'Settings',

    // ModeSelector
    'mode.code': 'Auto',
    'mode.ask': 'Ask',
    'mode.plan': 'Plan',
    'mode.bypass': 'Full Auto',

    // Activity status
    'chat.thinking': 'Thinking...',
    'chat.writing': 'Writing...',
    'chat.runningTool': 'Running tool',
    // Cycling thinking words (typewriter animation)
    'chat.thinkingCycle.0': 'Thinking',
    'chat.thinkingCycle.1': 'Computing',
    'chat.thinkingCycle.2': 'Optimizing',
    'chat.thinkingCycle.3': 'Iterating',
    'chat.thinkingCycle.4': 'Debugging',
    'chat.thinkingCycle.5': 'Doodling',
    'chat.thinkingCycle.6': 'Procrastinating',
    'chat.thinkingCycle.7': 'Daydreaming',
    'chat.thinkingCycle.8': 'Feeding the cat',
    'chat.thinkingCycle.9': 'Slacking off',
    'chat.thinkingCycle.10': 'Sipping coffee',
    'chat.thinkingCycle.11': 'Counting sheep',
    'chat.thinkingCycle.12': 'Hauling bricks',
    'chat.thinkingCycle.13': 'Meditating',
    'chat.thinkingCycle.14': 'Loading inspiration',
    'chat.thinkingCycle.15': 'Scratching head',
    'chat.thinkingCycle.16': 'Napping',

    // File upload
    'input.processingFiles': 'Processing...',
    'input.stop': 'Stop',
    'input.awaitingInteraction': 'Awaiting interaction response',

    // Rewind
    'rewind.title': 'Rewind',
    'rewind.confirm': 'Rewind to turn {n}',
    'rewind.current': '(current)',
    'rewind.noChanges': 'No code changes',
    'rewind.restoreConversation': 'Restore task only',
    'rewind.restoreAll': 'Restore code and task',
    'rewind.restoreCode': 'Restore code only',
    'rewind.summarize': 'Summarize from here',
    'rewind.cancel': 'Cancel',
    'rewind.success': 'Rewound to turn {n} (conversation only). Send a new message to resume.',
    'rewind.successAll': 'Rewound to turn {n} (code and conversation restored).',
    'rewind.successAllNoFiles': 'Rewound to turn {n} (conversation restored, code restore unavailable).',
    'rewind.successCode': 'Code restored to turn {n} state (conversation unchanged).',
    'rewind.restoring': 'Restoring files…',
    'rewind.codeRestoreFailed': 'Code restore failed. Please check file state manually.',
    'rewind.summaryTitle': 'Summary of turns {from}–{to}',
    'rewind.disabled': 'Cannot rewind while running',
    'rewind.noCheckpoint': 'Code restore unavailable for historical conversations',

    // Markdown rich text
    'msg.copyCode': 'Copy',
    'msg.copyText': 'Copy',
    'msg.copied': 'Copied!',
    'msg.imgError': 'Image failed to load',
    'msg.openLink': 'Open in browser',

    // Permission / Plan interactive UI
    'msg.permissionTitle': 'Permission Required',
    'msg.allow': 'Allow',
    'msg.deny': 'Deny',
    'msg.responded': 'Responded',
    'msg.planTitle': 'Execution Plan',
    'msg.planSteps': 'steps',
    'msg.viewPlan': 'View Plan',
    'msg.noPlan': 'No Plan yet',
    'msg.questionTitle': 'Question',
    'msg.questionSubmit': 'Submit',
    'msg.questionNext': 'Next',
    'msg.questionSkip': 'Skip',
    'msg.questionOther': 'Other',
    'msg.questionOtherPlaceholder': 'Enter custom answer...',
    'msg.questionLoading': 'Loading...',
    'msg.planReview': 'Review DeepSeek\'s plan',
    'msg.planApprove': 'Approve plan and start coding',
    'msg.planModify': 'Tell DeepSeek what to change',
    'msg.planApproved': 'Plan approved',
    'msg.planLabel': 'Plan',
    'chat.awaiting': 'Awaiting input...',
    'chat.tokenWarning': 'Context nearly full — try /compact',
    'chat.autoCompacting': 'Context near limit, auto-compacting...',
    'chat.stallWarning': 'Task still running — complex tasks may take a while. If no activity appears, try stopping and retrying',

    // Agent panel
    'agents.title': 'Agents',
    'agents.main': 'Main Agent',
    'agents.subAgent': 'Sub-agent',
    'agents.empty': 'Send a message to see agent activity',
    'agents.active': 'active',
    'agents.toggle': 'Agent Activity',
    'agents.spawning': 'Starting...',
    'agents.thinking': 'Thinking...',
    'agents.writing': 'Writing...',
    'agents.runningTool': 'Running tool',
    'agents.completed': 'Completed',
    'agents.error': 'Error',

    // WelcomeScreen
    'welcome.newChat': 'Select Folder',
    'welcome.subtitle': 'Select a project folder to get started',
    'welcome.recentProjects': 'Recent Projects',

    // Settings
    'settings.title': 'Settings',
    'settings.aiAvatar': 'AI Avatar',
    'settings.aiAvatarChange': 'Click to change avatar',
    'settings.aiAvatarReset': 'Reset to default',
    'settings.aiAvatarCrop': 'Edit Avatar',
    'settings.aiAvatarCancel': 'Cancel',
    'settings.aiAvatarSave': 'Save',
    'settings.userAvatar': 'User Avatar',
    'settings.userAvatarChange': 'Click to change avatar',
    'settings.userAvatarReset': 'Reset avatar',
    'settings.userNamePlaceholder': 'Enter display name',
    'settings.colorTheme': 'Color Theme',
    'settings.black': 'Black',
    'settings.orange': 'Orange',
    'settings.green': 'Green',
    'settings.blue': 'Blue',
    'settings.appearance': 'Appearance',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'settings.system': 'System',
    'settings.language': 'Language',
    'settings.defaultModel': 'Default Model',
    'settings.fontSize': 'Font Size',
    'settings.fontSizeHint': '{mod}+/- to adjust, {mod}+0 to reset',
    'settings.fontFamily': 'Interface Font',
    'settings.fontFamilyHint': 'If a font is not installed, the system fallback will be used.',
    'settings.monoFontFollowsInterface': 'Mono-styled labels follow interface font',
    'settings.advanced': 'Advanced',
    'settings.tab.general': 'General',
    'settings.tab.provider': 'API Provider',
    'settings.tab.cli': 'CLI',
    'settings.tab.mcp': 'MCP Servers',
    'settings.footer.changelog': 'Changelog',
    'settings.footer.checkUpdate': 'Check for Updates',
    'settings.footer.upToDate': 'Up to Date',

    // Provider
    'provider.title': 'API Provider',
    'provider.inherit': 'System Config',
    'provider.inheritDesc': 'Use external tools (e.g. CC-Switch) or system environment variables',
    'provider.addNew': 'Add Provider',
    'provider.addProvider': 'Add',
    'provider.official': 'Official',
    'provider.customApi': 'Custom API',
    'provider.editProvider': 'Edit Provider',
    'provider.deleteProvider': 'Delete',
    'provider.providerName': 'Provider Name',
    'provider.providerNamePlaceholder': 'e.g. OpenRouter',
    'provider.baseUrl': 'API Endpoint',
    'provider.baseUrlPlaceholder': 'https://api.example.com',
    'provider.apiKey': 'API Key',
    'provider.apiKeyPlaceholder': 'Enter API Key...',
    'provider.getApiKey': 'Get Key →',
    'provider.format': 'API Format',
    'provider.formatAnthropic': 'Anthropic Messages (Native)',
    'provider.formatOpenai': 'OpenAI Chat Completions',
    'provider.formatHint': 'Most third-party providers use OpenAI format. Anthropic direct uses Anthropic format.',
    'provider.modelMappings': 'Model Mappings',
    'provider.modelMappingsHint': 'Enter provider model names, at least one for connection test',
    'provider.opusModel': 'DeepseekV4Pro',
    'provider.sonnetModel': 'DeepseekV4Flash',
    'provider.haikuModel': 'DeepseekV4Flash',
    'provider.opusPlaceholder': 'e.g. DeepseekV4Pro',
    'provider.sonnetPlaceholder': 'e.g. DeepseekV4Flash',
    'provider.haikuPlaceholder': 'e.g. DeepseekV4Flash',
    'provider.modelIdPlaceholder': 'Model ID',
    'provider.providerModelPlaceholder': 'Provider model name',
    'provider.addModelMapping': 'Add model',
    'provider.extraModelPlaceholder': 'e.g. google/gemini-2.5-pro',
    'provider.proxyUrl': 'Proxy',
    'provider.proxyUrlPlaceholder': 'e.g. http://127.0.0.1:7890',
    'provider.proxyUrlHint': 'Some providers (e.g. OpenRouter) have region restrictions. Set a local proxy to bypass. Leave empty for system proxy.',
    'provider.extraEnv': 'Environment Variables',
    'provider.extraEnvHint': 'Custom env vars injected into the CLI process. Empty value removes the variable.',
    'provider.extraEnvValuePlaceholder': 'Value (empty=remove)',
    'provider.addEnvVar': 'Add',
    'provider.testConnection': 'Test Connection',
    'provider.testing': 'Testing...',
    'provider.testSuccess': 'Connected',
    'provider.testFailed': 'Failed (some providers restrict request origin — try sending a message directly)',
    'provider.testNoModel': 'Enter at least one model name first',
    'provider.testNoKey': 'Enter API Key first',
    'provider.testAuthError': 'Auth failed, check API Key',
    'provider.testConnectivity': 'Connectivity',
    'provider.testAuth': 'Auth',
    'provider.testModel': 'Model',
    'provider.testSkipped': 'Skipped',
    'provider.noModelMapping': 'Provider "{provider}" has no {tier} model mapping configured. Go to Settings → API Providers to set one up.',
    'provider.importConfig': 'Import Config',
    'provider.exportConfig': 'Export Config',
    'provider.importTitle': 'Select API config file',
    'provider.exportTitle': 'Export API config',
    'provider.importSuccess': 'Imported',
    'provider.exportSuccess': 'Exported',
    'provider.unnamed': 'Unnamed',
    'provider.fromPreset': 'From Preset',
    'provider.fromPresetTitle': 'From Preset',
    'provider.customConfig': 'Custom Config',
    'provider.importFile': 'Import JSON File',
    'provider.alreadyAdded': 'Added',
    'provider.deleteConfirm': 'Delete "{name}"? API key and config will be permanently removed.',
    'provider.formatAnthropicShort': 'Anthropic',
    'provider.formatOpenaiShort': 'OpenAI',

    // Slash commands
    'slash.commands': 'Commands',
    'slash.global': 'Global',
    'slash.project': 'Project',
    'slash.hasArgs': 'Args',
    'slash.noMatch': 'No matching commands',
    'slash.builtin': 'Built-in',
    'slash.skills': 'Skills',
    'slash.immediate': 'Instant',
    'slash.projectCommands': 'Project Commands',
    'slash.globalCommands': 'Global Commands',
    'slash.projectSkills': 'Project Skills',
    'slash.globalSkills': 'Global Skills',

    // Builtin command descriptions
    'slash.desc.ask': 'Ask a question without making changes',
    'slash.desc.bug': 'Report a bug with Claude Code',
    'slash.desc.clear': 'Clear task history',
    'slash.desc.compact': 'Compact task to reduce context',
    'slash.desc.context': 'Manage context files and directories',
    'slash.desc.cost': 'Show session cost and token usage',
    'slash.desc.doctor': 'Check Claude Code health status',
    'slash.desc.export': 'Export task to markdown',
    'slash.desc.help': 'Show available commands',
    'slash.desc.init': 'Initialize project configuration',
    'slash.desc.mcp': 'Manage MCP server connections',
    'slash.desc.memory': 'View or edit MEMORY.md files',
    'slash.desc.permissions': 'View and manage tool permissions',
    'slash.desc.plan': 'Enter plan mode for complex tasks',
    'slash.desc.rename': 'Rename the current session',
    'slash.desc.rewind': 'Rewind task to a previous turn',
    'slash.desc.stats': 'Show session statistics',
    'slash.desc.statusline': 'Configure status line display',
    'slash.desc.tasks': 'View running background tasks',
    'slash.desc.teleport': 'Teleport context to a new session',
    'slash.desc.todos': 'View todo items from the session',
    'slash.desc.usage': 'Show detailed token usage breakdown',

    // Command feedback
    'cmd.switchedToAsk': 'Switched to Ask mode (answers only, no code changes)',
    'cmd.switchedToPlan': 'Switched to Plan mode (planning only, no execution)',
    'cmd.switchedToCode': 'Switched to Auto mode (accept edits, still asks for sensitive actions)',
    'cmd.switchedToBypass': 'Switched to Full Auto mode (skips permission checks; next send restarts the session automatically)',
    'cmd.compacting': 'Compacting context...',
    'cmd.noActiveSession': 'No active session. Send a message first.',
    'cmd.costTitle': 'Session Cost',
    'cmd.costModel': 'Model',
    'cmd.costAmount': 'Cost',
    'cmd.costDuration': 'Duration',
    'cmd.costTurns': 'Turns',
    'cmd.costTokens': 'Tokens',
    'cmd.helpTitle': 'Available Commands',
    'cmd.helpCustom': 'Custom commands',
    'cmd.helpSkills': 'Skills',
    'cmd.bugReport': 'Please visit https://github.com/anthropics/claude-code/issues to report bugs.',
    'cmd.unknownCommand': 'Unknown command',
    'cmd.noSessionData': 'No session data yet. Send a message first.',
    'cmd.usageTitle': 'Token Usage',
    'cmd.usageCurrentTurn': 'Current Turn',
    'cmd.usageTotalSession': 'Session Total',
    'cmd.usageInput': 'Input',
    'cmd.usageOutput': 'Output',
    'cmd.usageTotal': 'Total',
    'cmd.usageOfficialHint': 'For subscription quota details, run claude in your terminal and type /usage.',
    'cmd.renamed': 'Renamed to "{name}"',
    'cmd.renameNoArgs': 'Please provide a name. Usage: /rename <name>',
    'cmd.exportNoPath': 'Session has not been saved to disk yet.',
    'cmd.cliRunning': 'Running...',
    'cmd.cliDone': 'completed',
    'cmd.doctorTitle': 'Health Check',
    'cmd.doctorCli': 'CLI Path',
    'cmd.doctorVersion': 'Version',
    'cmd.doctorAuth': 'Auth Status',
    'cmd.doctorAuthOk': 'Logged in',
    'cmd.doctorAuthFail': 'Not logged in',
    'cmd.doctorNotInstalled': 'Claude CLI is not installed',
    'cmd.initCreated': 'Created CLAUDE.md',
    'cmd.initExists': 'CLAUDE.md already exists',
    'cmd.initNoDir': 'Please select a project directory first',
    'cmd.memoryTitle': 'Project Memory (CLAUDE.md)',
    'cmd.memoryEmpty': 'No CLAUDE.md found in the current project',
    'cmd.memoryNoDir': 'Please select a project directory first',
    'cmd.permissionsTitle': 'Permissions',
    'cmd.permissionsHint': 'Permissions are managed by the Claude CLI session. Run `claude permissions` in a terminal for details.',
    'cmd.mcpTitle': 'MCP Servers',
    'cmd.mcpHint': 'MCP servers are managed by Claude CLI. Run `claude mcp` in a terminal for details.',

    // Command processing card
    'cmd.processing': 'Running',
    'cmd.processingDone': 'Completed',
    'cmd.elapsed': 'Elapsed',
    'cmd.showOutput': 'Show output',
    'cmd.hideOutput': 'Hide output',

    // Plan review enhancements
    'msg.planStepCount': '{n} steps',
    'msg.planApproveHint': 'Approve (Enter)',
    'msg.planCollapsed': 'Plan approved — click to expand',
    'msg.planReady': 'Plan ready for review',
    'msg.planApproveAndExecute': 'Approve & Execute',
    'msg.switchToCode': 'Switch to Code',

    // Permission enhancements
    'msg.permissionAllowHint': 'Allow (y)',
    'msg.permissionDenyHint': 'Deny (n)',
    'msg.permissionCommand': 'Command',

    // Question enhancements
    'msg.questionProgress': 'Question {current} / {total}',

    // Tool group
    'msg.toolGroup': '{n} tool calls',
    'msg.toolGroupSummary': '{summary}',
    'msg.toolGroupExpand': 'Expand',
    'msg.toolGroupCollapse': 'Collapse',

    // Slash command execution types
    'slash.cli': 'CLI',
    'slash.session': 'Session',

    // Skills panel
    'skills.title': 'Skills',
    'skills.refresh': 'Refresh',
    'skills.create': 'Create',
    'skills.cancel': 'Cancel',
    'skills.edit': 'Edit',
    'skills.save': 'Save',
    'skills.saving': 'Saving...',
    'skills.discard': 'Discard',
    'skills.delete': 'Delete',
    'skills.loading': 'Loading...',
    'skills.empty': 'No skills yet. Click + to create one.',
    'skills.namePlaceholder': 'Enter skill name...',
    'skills.global': 'Global',
    'skills.project': 'Project',
    'skills.confirmDelete': 'Are you sure you want to delete this skill?',
    'skills.viewEdit': 'Edit',
    'skills.viewPreview': 'Preview',
    'skills.viewSplit': 'Split',
    'skills.unsaved': 'Unsaved',
    'skills.search': 'Search skills...',
    'skills.useInInput': 'Use in input',
    'skills.enable': 'Enable',
    'skills.disable': 'Disable',
    'skills.duplicate': 'Duplicate',
    'skills.revealInFinder': 'Reveal in {fileManagerEn}',
    'skills.tools': 'Tools',
    'skills.model': 'Model',
    'skills.context': 'Context',
    'skills.version': 'Version',

    // MCP panel
    'panel.mcp': 'MCP',
    'mcp.title': 'MCP Servers',
    'mcp.add': 'Add',
    'mcp.edit': 'Edit',
    'mcp.delete': 'Delete',
    'mcp.name': 'Name',
    'mcp.command': 'Command',
    'mcp.args': 'Args',
    'mcp.env': 'Env',
    'mcp.type': 'Type',
    'mcp.noServers': 'No MCP servers configured',
    'mcp.confirmDelete': 'Are you sure you want to delete this MCP server?',
    'mcp.save': 'Save',
    'mcp.cancel': 'Cancel',
    'mcp.envHint': 'One per line, format: KEY=VALUE',
    'mcp.argsHint': 'One argument per line',
    'mcp.namePlaceholder': 'Enter server name...',
    'mcp.commandPlaceholder': 'Enter command, e.g. npx',
    'mcp.refresh': 'Refresh',
    'mcp.envCount': 'env vars',

    // CLI Management
    'cli.check': 'Check CLI Status',
    'cli.checking': 'Checking...',
    'cli.installed': 'Installed',
    'cli.notFound': 'Claude Code CLI not found',
    'cli.versionIncompat': '⚠ CLI version is outdated — some features may not work. Click "Reinstall" to upgrade',
    'cli.install': 'Install Claude Code',
    'cli.installing': 'Installing...',
    'cli.installDone': 'Installation complete',
    'cli.installFail': 'Installation failed',
    'cli.retry': 'Retry',
    'cli.reinstall': 'Reinstall',
    'cli.pathHint': 'Restart your terminal after installation',
    'cli.configuring': 'Configuring...',
    'cli.npmFallback': 'Installing via npm mirror...',
    'cli.reinstallHint': 'Click reinstall to fix',
    'cli.confirmReinstall': 'Are you sure you want to reinstall the CLI? This will re-download and replace the current CLI binary.',
    'cli.restart': 'Restart app to apply',
    'cli.update': 'Update CLI',
    'cli.updating': 'Updating...',
    'cli.updateDone': 'Update complete',
    'cli.environment': 'CLI Environment',
    'cli.scanning': 'Scanning...',
    'cli.noCliFound': 'No CLI installations found',
    'cli.rescan': 'Rescan',
    'cli.cleanAppLocal': 'Clean App-local',
    'cli.cleaning': 'Cleaning...',
    'cli.source.official': 'Official',
    'cli.source.system': 'System',
    'cli.source.appLocal': 'App',
    'cli.source.versionManager': 'VM',
    'cli.source.dynamic': 'PATH',
    'cli.use': 'Use This',
    'cli.pinned': 'Pinned',
    'cli.unpinned': 'Unpinned',
    'cli.unpin': 'Unpin',
    'cli.injectPath': 'Inject PATH',
    'cli.delete': 'Delete',
    'cli.confirmDelete': 'Are you sure you want to delete this CLI?',
    'cli.inUse': 'In Use',

    // Update
    'update.check': 'Check for Updates',
    'update.checking': 'Checking...',
    'update.available': 'Update Available',
    'update.latest': 'Up to Date',
    'update.downloading': 'Downloading...',
    'update.readyRestart': 'Update ready, restart to install',
    'update.restart': 'Restart',
    'update.error': 'Update check failed',
    'update.version': 'New version',
    'update.install': 'Download & Install',

    // Network / firewall hints
    'network.firewallHint': 'Network error — you may need a VPN or proxy to connect',
    'error.permissionHint': 'Permission denied — try running as administrator, or check if antivirus is blocking the directory',
    'changelog.title': "What's New",
    'changelog.dismiss': 'Got it',
    'changelog.view': "What's New",

    // Setup wizard
    'setup.checking': 'Detecting Claude Code CLI...',
    'setup.notInstalled': 'Claude Code CLI not found',
    'setup.notInstalledDesc': `Claude Code CLI is required to use ${APP_NAME}.`,
    'setup.install': 'Install Claude Code',
    'setup.installing': 'Installing...',
    'setup.installFailed': 'Installation failed',
    'setup.installFailedDesc': 'Automatic installation was unsuccessful. Please try manual installation.',
    'setup.retry': 'Retry',
    'setup.manualInstall': 'Manual installation',
    'setup.manualInstallCmd': 'Run the following command in your terminal:',
    'setup.installed': 'Claude Code CLI installed',
    'setup.loginNeeded': 'Login to your Anthropic account',
    'setup.loginNeededDesc': 'Sign in to start using Claude Code.',
    'setup.login': 'Login',
    'setup.loggingIn': 'Waiting for authentication...',
    'setup.loggingInDesc': 'A browser window should have opened. Please complete the login there.',
    'setup.loggingInTerminalDesc': 'A terminal window has been opened with `claude login`. Please complete the login in the terminal. This page will update automatically once authenticated.',
    'setup.loginFailed': 'Login failed',
    'setup.loginFailedDesc': 'Authentication was unsuccessful. Please try again.',
    'setup.ready': 'All set!',
    'setup.readyDesc': 'Claude Code CLI is installed and authenticated. You\'re ready to go.',
    'setup.start': 'Get Started',
    'setup.skip': 'Skip',
    'setup.version': 'Version',
    'setup.gitBashMissing': 'Git for Windows Required',
    'setup.gitBashMissingDesc': 'Claude Code requires Git Bash on Windows. Installing automatically...',
    'setup.downloadGitBash': 'Download Git for Windows',
    'setup.recheckGitBash': 'Already installed? Re-check',
    'setup.downloadingGit': 'Downloading Git for Windows...',
    'setup.extractingGit': 'Installing Git...',
    'setup.downloadingNode': 'Downloading Node.js runtime...',
    'setup.extractingNode': 'Extracting Node.js...',
    'setup.preparingEnv': 'Preparing runtime environment...',
    'setup.installingCli': 'Installing CLI via npm...',
    'setup.nativeVersion': 'Fetching latest version...',
    'setup.nativeManifest': 'Verifying file info...',
    'setup.nativeDownload': 'Downloading Claude Code...',
    'setup.nativeVerify': 'Verifying file integrity...',
    'setup.nativeInstall': 'Installing to system...',
    'setup.npmFallback': 'Installing via fallback method...',

    // Dashboard
    'dashboard.title': 'XiaoKe Dashboard',
    'dashboard.card1': 'One-Click AI Project Requirements Doc',
    'dashboard.desc1': 'Quickly generate structured project requirements documents with multiple templates',
    'dashboard.card2': 'One-Click Dev Plan Generator',
    'dashboard.desc2': 'Auto-analyze requirements and generate detailed frontend/backend development plans',
    'dashboard.card3': 'Auto-Generate Claude Code / Codex Instructions',
    'dashboard.desc3': 'Generate precise Claude Code or Codex modification instructions from requirements',
    'dashboard.card4': 'Skill Manager (Chinese UI)',
    'dashboard.desc4': 'Manage and edit skills with a Chinese interface for creating custom skills',
    'dashboard.card5': 'API Provider Visual Management',
    'dashboard.desc5': 'Visually manage multiple API provider configs with Anthropic & OpenAI-compatible formats',
    'dashboard.card6': 'MCP Manager',
    'dashboard.desc6': 'Centrally manage MCP server connections, tools and resources',
    'dashboard.card7': 'GitHub Project Assistant',
    'dashboard.desc7': 'Interact with GitHub repos, manage issues, PRs and code reviews',
    'dashboard.hint': 'Click a card to get started (features rolling out gradually)',
    'panel.dashboard': 'Dashboard',

    // Dashboard prompt modals
    'dashboard.modalTitle1': 'One-Click AI Project Requirements Doc',
    'dashboard.modalTitle2': 'One-Click Dev Plan Generator',
    'dashboard.modalTitle3': 'Auto-Generate Claude Code / Codex Instructions',
    'dashboard.modalTitle4': 'Skill Manager (Chinese UI)',
    'dashboard.modalTitle5': 'API Provider Visual Management',
    'dashboard.modalTitle6': 'MCP Manager',
    'dashboard.modalTitle7': 'GitHub Project Assistant',
    'dashboard.prompt1': `You are a senior product manager. Please generate a professional AI project requirements document (PRD) for the following project.

[Project Name] (fill in your project name)
[Project Type] Web App / Mobile App / Desktop App / CLI Tool / API Service / Other
[Target Users] (who will use this product and what are their core pain points)
[Core Features]
1.
2.
3.
4.
5.
[Tech Stack Preference] (e.g. React + Node.js / Vue + Python / Rust + Tauri / Next.js)
[Special Constraints] (e.g. i18n, accessibility, offline support, compliance requirements)

Please generate a PRD following this structure and save as PRD.md:

## 1. Project Overview & Background
- One-sentence project description
- Problem being solved (user pain points)
- Differentiation from existing solutions

## 2. Target User Personas
- Primary user groups and their characteristics
- Core use cases for each group

## 3. Core Features
- Prioritized as P0/P1/P2
- 1-2 sentence description per feature

## 4. User Flows
- Core user journeys (text or simple ASCII flow diagrams)

## 5. Page/Module Structure
- List of main pages/modules and their responsibilities

## 6. Data Model Summary
- Core entities and their key fields
- Entity relationships

## 7. Tech Stack Recommendations
- Recommended frontend/backend technologies with rationale
- Whether AI/ML capabilities are needed

## 8. MVP Scope
- Must-have features for v1
- Explicitly excluded features

## 9. Risks & Assumptions
- Key technical risks
- Product assumptions and validation approach

## 10. Milestone Suggestions
- Suggested development phases and time estimates

Please output in the same language as this prompt. Keep technical terms in English.`,
    'dashboard.prompt2': `You are a senior full-stack engineer. Please generate a detailed development plan for the following project.

[Project Requirements]
(Paste or describe your project requirements here)

[Direction] Frontend / Backend / Full-stack

First, quickly browse the existing project code structure, then generate a development plan following this structure:

## 1. Technology Selection
- Recommended frontend/backend frameworks with rationale
- Database recommendations
- Key third-party services/libraries

## 2. Project Directory Structure
- Recommended directory organization
- Responsibility of each directory

## 3. Frontend Development Plan (if applicable)
- Page inventory & route design
- Component tree structure (core components and their relationships)
- State management approach
- UI/UX considerations

## 4. Backend Development Plan (if applicable)
- API design (RESTful or GraphQL)
- Middleware/interceptor design
- Data model design (core tables/collections and fields)
- Authentication & authorization plan (if needed)

## 5. Development Phases & Milestones
- Prioritized development phases
- Task breakdown per phase with estimated hours
- Inter-phase dependencies

## 6. Testing Plan
- Unit testing strategy
- Integration testing strategy
- Key E2E test scenarios

## 7. Key Risks & Mitigation
- Technical risks
- Schedule risks
- Third-party dependency risks

Save output as:
- frontend-plan.md (frontend portion)
- backend-plan.md (backend portion)
- api-design.md (API design)

Please output in the same language as this prompt.`,
    'dashboard.prompt3': `You are a careful software engineer. Please generate safe Claude Code / Codex modification instructions based on the following requirements.

[Requirements / Issue Description]
(Describe the feature you want to implement or the bug to fix)

[Constraints]
- Maintain existing API compatibility: Yes / No
- Add tests: Yes / No
- Update docs: Yes / No

Follow these steps:

## Step 1: Inspect Project Structure
First, browse the project directory structure and key files to understand the existing code organization.

## Step 2: Analyze Impact Scope
- List all files that need to be modified
- Label each file's modification type (Add / Edit / Delete)
- Assess dependencies between modifications

## Step 3: Generate Modification Instructions
For each file, provide specific instructions:
- For additions: where to create the file, content summary
- For edits: which location to modify (function/class/block) and what to change
- For deletions: what to remove and why

### Key Principles:
- Make small, incremental changes one at a time
- Avoid large-scale rewrites
- Run tests or build verification after each step
- Summarize changed files after each step

## Step 4: Verification Plan
- List verification commands for each step
- e.g. npm run build / cargo check / npx tsc --noEmit / pytest

## Step 5: Summary
- Complete list of all changed files
- Potential side effects and rollback plan

Please output instructions that can be directly copied and executed in Claude Code or Codex.`,
    'dashboard.prompt4': `You are a technical documentation localization expert. Please review and organize Skill configurations in this project.

Follow these steps:

## Step 1: Scan Skill Directories
First, scan the following locations for all Skill files:
- .claude/skills/ (project-level skills)
- ~/.claude/skills/ (global skills)
List all found skills with their file paths.

## Step 2: Analyze Each Skill
For each skill, explain:
- Skill name and purpose
- Trigger conditions and applicable scenarios
- Main tools and model configuration
- Input/output format

## Step 3: Localization Suggestions
- Translate skill names and descriptions into natural Chinese
- Translate important usage instructions and prompts
- Keep technical terms in English (API, JSON, MCP, SDK, etc.)
- Keep all code, commands, and configuration values unchanged

## Step 4: Organization Optimization
- Identify duplicate or low-value skills; suggest merging or removal
- Suggest skill categorization and naming conventions
- Propose directory structure improvements

## Step 5: Output Report
Generate a SkillManageReport.md containing:
- Skill inventory with descriptions
- Localization suggestions
- Optimization recommendations (duplicates/low-value/naming)
- Recommended organizational structure

### Safety Note:
- Do NOT delete any files unless explicitly confirmed by the user
- Back up original files before modification
- All suggestions must be reviewed and approved before execution`,
    'dashboard.prompt5': `You are an API configuration security expert. Please review and manage API Provider configurations in this project.

Follow these steps:

## Step 1: Inspect Provider Configuration
First, find and read the Provider configuration file (usually at ~/.xiaoke/providers.json or in project settings).
List all configured providers.

## Step 2: Analyze Each Provider
For each provider, explain:
- Provider name and API format (Anthropic / OpenAI Compatible)
- What the Base URL actually points to (official / proxy)
- Model mapping relationships (which actual models Opus/Sonnet/Haiku map to)
- Where the API Key is stored (environment variable / config file / system keychain)

## Step 3: Security Audit
- Check for hardcoded API Keys in configuration files
- Check if API Keys have exposure risks (e.g., committed to git)
- Check if .gitignore excludes sensitive configuration files
- Check if proxy settings are secure

## Step 4: Optimization Recommendations
- Suggest secure provider preset configurations
- Recommend using environment variables instead of config files for API Keys
- If there are redundant or duplicate providers, suggest cleanup
- Provide specific remediation steps for insecure configurations

### Security Warning:
- NEVER output or log any API Key in plain text
- NEVER write API Keys to any file that could be committed
- If exposure risks are found, alert immediately and provide remediation`,
    'dashboard.prompt6': `You are an MCP configuration security expert. Please review and manage MCP (Model Context Protocol) server configurations in this project.

Follow these steps:

## Step 1: Inspect MCP Configuration
First, find and read the MCP configuration file (usually at .mcp.json or ~/.claude.json).
List all configured MCP servers with their basic information.

## Step 2: Analyze Each MCP Server
For each MCP server, explain:
- Server name and purpose (what capabilities it provides)
- Server type (stdio / SSE / streamable HTTP)
- Completeness of the start command and arguments
- Purpose and necessity of environment variables

## Step 3: Security Audit
- Check if the start command exists (is npx/python/node installed)
- Check if command arguments are safe (potential injection risks)
- Check if environment variables contain sensitive information (Token/Key/Secret)
- Identify MCP servers with high-risk permissions (shell execution, file write, network access)

## Step 4: Configuration Optimization
- If multiple MCP servers exist, suggest a reasonable loading order
- For high-risk permission servers, suggest limiting their scope
- Check for known compatibility issues or version conflicts
- Provide safe installation and configuration steps

## Step 5: Output Report
Generate an McpAuditReport.md containing:
- MCP server inventory with descriptions
- Security risk assessment (High/Medium/Low)
- Configuration optimization recommendations
- Installation verification steps

### Safety Note:
- MCP servers may have permissions to read/write files, execute commands, and access networks
- Only install MCP servers from trusted sources
- Regularly review MCP server permission scopes`,
    'dashboard.prompt7': `You are a GitHub project management assistant. Please analyze and manage this GitHub repository.

Follow these steps:

## Step 1: Understand the Project
First, read the project's key files to understand it:
- README.md (project overview, installation, and usage)
- package.json / Cargo.toml / go.mod (tech stack and dependencies)
- src/ or main source directory structure
- If .github/ directory exists, check CI/CD and template configurations

## Step 2: Project Summary
Summarize:
- Project positioning and core functionality
- Technical architecture (frontend/backend/database)
- Code organization structure
- Key dependencies and critical third-party libraries

## Step 3: Code Health Check
- Identify code quality issues (duplicate code, long functions, excessive coupling)
- Check for obvious security risks
- Assess test coverage (if test files exist)
- Check dependencies for known vulnerabilities (if lock files exist)

## Step 4: Issues/PRs Analysis (if access available)
- Categorize and prioritize open issues
- Identify long-standing unresolved issues and analyze reasons
- Review open PRs (code quality, security, performance)
- Highlight issues requiring attention

## Step 5: Development Recommendations
- Suggest next development tasks (prioritized)
- Generate appropriate commit message and PR description suggestions
- If technical debt exists, suggest a repayment plan

## Step 6: Output Report
Generate a ProjectReport.md containing project summary, risk assessment, and action items.

Please output in the same language as this prompt. Keep repo names, branch names, and commands in English.`,

    'dashboard.tip1': '💡 Tip: Fill in the placeholder info in brackets first, then click "Copy Prompt" and paste into Claude Code or Codex to execute.',
    'dashboard.tip2': '💡 Tip: If your project already has code, the AI will browse the project structure first before generating the plan. Best used inside an existing project directory.',
    'dashboard.tip3': '💡 Tip: This prompt guides the AI to inspect project structure first, then generate modification instructions step by step. Ideal for safe, incremental changes.',
    'dashboard.tip4': '💡 Tip: The AI will scan .claude/skills/ and global skills directories. It will not auto-delete any files — all changes require your confirmation.',
    'dashboard.tip5': '💡 Tip: The AI will check ~/.xiaoke/providers.json and other config files to help identify security issues. Your API Keys will not be output.',
    'dashboard.tip6': '💡 Tip: The AI will check MCP config in .mcp.json or ~/.claude.json and assess the permission risk of each server.',
    'dashboard.tip7': '💡 Tip: The AI will first read README, package.json, source directories, and other key files to understand the project, then generate a structured analysis report.',
    'dashboard.copyPrompt': 'Copy Prompt',
    'dashboard.copied': 'Copied to clipboard',
    'dashboard.closeModal': 'Close',

    // Permission dialog
    'perm.title': 'File Access Required',
    'perm.desc': `${APP_NAME} needs Full Disk Access to read and write project files. Please grant access in System Settings, otherwise some features may not work.`,
    'perm.openSettings': 'Open System Settings',
    'perm.later': 'Later',
    'perm.path': 'System Settings → Privacy & Security → Full Disk Access',
  },
};

// --- Platform-aware placeholder substitution ---

function resolvePlatformPlaceholders(text: string): string {
  if (!text.includes('{')) return text;
  return text
    .replace(/\{mod\}/g, modKey())
    .replace(/\{fileManager\}/g, fileManagerName())
    .replace(/\{fileManagerEn\}/g, fileManagerNameEn());
}

// --- Non-reactive t() for use outside components ---

export function t(key: string): string {
  const locale = useSettingsStore.getState().locale;
  const raw = messages[locale]?.[key] || messages['en'][key] || key;
  return resolvePlatformPlaceholders(raw);
}

// --- Reactive hook for use inside React components ---

export function useT() {
  const locale = useSettingsStore((s) => s.locale);
  return (key: string): string => {
    const raw = messages[locale]?.[key] || messages['en'][key] || key;
    return resolvePlatformPlaceholders(raw);
  };
}
