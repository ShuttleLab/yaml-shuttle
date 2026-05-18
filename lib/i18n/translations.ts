/**
 * 中英文文案
 */

export const messages = {
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      mainAria: "主导航",
      githubAria: "在 GitHub 上查看 YAML Shuttle",
    },
    home: {
      title: "YAML Shuttle",
      subtitle:
        "快速校验、格式化与转换 YAML，支持美化、压缩、转义及 YAML/JSON 互转，安全本地处理。",
      sectionTitle: "主内容区",
      sectionDesc:
        "此处将放置 YAML 工具（校验、格式化、转义、互转等）的主界面与操作区域。",
    },
    yamlValidator: {
      title: "YAML 校验",
      placeholder: "粘贴或输入 YAML 文本…",
      validate: "校验",
      clear: "清空",
      beautify: "美化",
      minify: "压缩",
      valid: "校验通过",
      invalid: "校验失败",
      line: "行",
      column: "列",
      errorMessage: "错误信息",
      errorSnippet: "错误行",
      ariaLabelInput: "YAML 输入框",
      ariaLabelValidate: "校验 YAML",
      ariaLabelBeautify: "美化为标准格式",
      ariaLabelMinify: "压缩为流式格式",
      formatResult: "格式化结果",
      copyResult: "复制结果",
      copied: "已复制",
      errorLineHint: "错误行已在左侧行号中标红",
    },
    yamlConverter: {
      title: "YAML / JSON 互转",
      placeholder: "粘贴或输入 YAML 或 JSON 文本…",
      yamlToJson: "YAML → JSON",
      jsonToYaml: "JSON → YAML",
      clear: "清空",
      convertResult: "转换结果",
      copyResult: "复制结果",
      copied: "已复制",
      convertFailed: "转换失败",
      ariaLabelInput: "输入框",
      ariaLabelYamlToJson: "将 YAML 转换为 JSON",
      ariaLabelJsonToYaml: "将 JSON 转换为 YAML",
    },
    yamlEscape: {
      title: "YAML 转义 / 还原",
      inputPlaceholder: "输入要转义或还原的文本…",
      outputPlaceholder: "结果将显示在这里",
      escape: "一键转义",
      unescape: "一键还原",
      copyOutput: "复制结果",
      copied: "已复制",
      ariaLabelInput: "转义输入框",
      ariaLabelOutput: "转义结果",
      ariaLabelEscape: "将文本转为 YAML 安全字符串",
      ariaLabelUnescape: "将 YAML 字符串还原为原始文本",
      unescapeError: "还原失败",
    },
    about: {
      title: "关于 YAML Shuttle",
      description:
        "关于页内容将在此处展示（服务介绍、安全特性、使用场景、支持我们、联系方式等）。",
      intro: {
        title: "服务介绍",
        body: "YAML Shuttle 是一款在浏览器本地运行的 YAML 工具，提供校验、格式化、转义与 YAML/JSON 互转功能。无需上传数据到服务器，所有处理均在您的设备上完成，兼顾效率与隐私。",
      },
      security: {
        title: "安全特性",
        local: {
          title: "本地处理",
          desc: "所有 YAML 均在浏览器内处理，数据不离开您的设备。",
        },
        noUpload: {
          title: "无数据上传",
          desc: "不向任何服务器发送您的内容，无日志、无追踪。",
        },
        openSource: {
          title: "开源透明",
          desc: "代码可审计，构建与部署流程透明，可自托管使用。",
        },
        privacy: {
          title: "隐私保护",
          desc: "不收集个人数据，不设账号体系，用完即走。",
        },
      },
      useCases: {
        title: "使用场景",
        items: "开发调试、接口联调、配置校验、YAML/JSON 格式互转、日志格式化、教学演示、快速修正 YAML 语法错误。",
      },
      support: {
        title: "与君初相识，犹如故人归",
        supportDesc: "YAML Shuttle 免费使用，由个人维护。若对您有帮助，欢迎分享给朋友。",
        shareBtn: "分享给朋友",
        copiedHint: "已经复制网址，可以直接发给好友",
      },
      contact: {
        title: "联系方式",
        email: "邮箱：",
        emailValue: "support@shuttlelab.org",
      },
    },
    footer: {
      rights: "保留所有权利。",
      navAria: "页脚导航",
      contact: "联系我们",
      otherTools: "ShuttleLab 旗下其他产品",
    },
    common: {
      appName: "ShuttleLab",
    },
    lang: {
      zh: "中文",
      en: "English",
      switcherAria: "切换语言",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      mainAria: "Main navigation",
      githubAria: "View YAML Shuttle on GitHub",
    },
    home: {
      title: "YAML Shuttle",
      subtitle:
        "Validate, format, and convert YAML quickly. Pretty-print, minify, escape, and convert between YAML and JSON—all processed locally and securely.",
      sectionTitle: "Main content",
      sectionDesc:
        "The main YAML tools (validate, format, escape, convert) will live here.",
    },
    yamlValidator: {
      title: "YAML Validator",
      placeholder: "Paste or type YAML here…",
      validate: "Validate",
      clear: "Clear",
      beautify: "Beautify",
      minify: "Minify",
      valid: "Valid YAML",
      invalid: "Invalid YAML",
      line: "Line",
      column: "Column",
      errorMessage: "Error",
      errorSnippet: "Error line",
      ariaLabelInput: "YAML input",
      ariaLabelValidate: "Validate YAML",
      ariaLabelBeautify: "Beautify to standard format",
      ariaLabelMinify: "Minify to flow style",
      formatResult: "Formatted result",
      copyResult: "Copy result",
      copied: "Copied",
      errorLineHint: "Error line is highlighted in red in the gutter.",
    },
    yamlConverter: {
      title: "YAML / JSON Converter",
      placeholder: "Paste or type YAML or JSON here…",
      yamlToJson: "YAML → JSON",
      jsonToYaml: "JSON → YAML",
      clear: "Clear",
      convertResult: "Converted result",
      copyResult: "Copy result",
      copied: "Copied",
      convertFailed: "Conversion failed",
      ariaLabelInput: "Input",
      ariaLabelYamlToJson: "Convert YAML to JSON",
      ariaLabelJsonToYaml: "Convert JSON to YAML",
    },
    yamlEscape: {
      title: "YAML Escape / Unescape",
      inputPlaceholder: "Enter text to escape or unescape…",
      outputPlaceholder: "Result will appear here",
      escape: "Escape",
      unescape: "Unescape",
      copyOutput: "Copy result",
      copied: "Copied",
      ariaLabelInput: "Escape input",
      ariaLabelOutput: "Escape result",
      ariaLabelEscape: "Escape text as YAML-safe string",
      ariaLabelUnescape: "Unescape YAML string to plain text",
      unescapeError: "Unescape failed",
    },
    about: {
      title: "About YAML Shuttle",
      description:
        "About page content will go here (service intro, security, use cases, support, contact).",
      intro: {
        title: "Service Introduction",
        body: "YAML Shuttle is a browser-based YAML tool that validates, formats, escapes, and converts between YAML and JSON. All processing runs locally on your device—no data is sent to any server—so you get both speed and privacy.",
      },
      security: {
        title: "Security & Privacy",
        local: {
          title: "Local Processing",
          desc: "All YAML is handled in your browser; your data never leaves your device.",
        },
        noUpload: {
          title: "No Data Upload",
          desc: "We don't send your content anywhere—no logging, no tracking.",
        },
        openSource: {
          title: "Open & Transparent",
          desc: "Code is auditable; build and deploy are transparent; you can self-host.",
        },
        privacy: {
          title: "Privacy First",
          desc: "No personal data collection, no accounts—use and leave.",
        },
      },
      useCases: {
        title: "Use Cases",
        items: "Development and debugging, API integration, config validation, YAML/JSON conversion, log formatting, teaching and demos, fixing common YAML syntax errors.",
      },
      support: {
        title: "Meeting you for the first time feels like the return of an old friend",
        supportDesc: "YAML Shuttle is free and maintained by one person. If it helps you, consider share with Friends:",
        shareBtn: "Share with Friends",
        copiedHint: "URL copied. You can share it with friends.",
      },
      contact: {
        title: "Contact",
        email: "Email: ",
        emailValue: "support@shuttlelab.org",
      },
    },
    footer: {
      rights: "All rights reserved.",
      navAria: "Footer navigation",
      contact: "Contact",
      otherTools: "Other tools by ShuttleLab",
    },
    common: {
      appName: "ShuttleLab",
    },
    lang: {
      zh: "中文",
      en: "English",
      switcherAria: "Switch language",
    },
  },
} as const;

export type Locale = keyof typeof messages;
export type MessageKey = keyof (typeof messages)["zh"];
