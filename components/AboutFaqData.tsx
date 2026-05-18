/**
 * Bilingual content data for AboutFaq.
 * Separated from the client component so server components can import it
 * without crossing the "use client" boundary.
 */

export type Bilingual = { zh: string; en: string };
export type Step = Bilingual;
export type FaqItem = { q: Bilingual; a: Bilingual };
export type HowTo = { id: string; name: Bilingual; steps: Step[] };

export const WHO_FOR: Bilingual[] = [
  { zh: "编写 Kubernetes / Helm / GitHub Actions 配置的 DevOps 工程师", en: "DevOps engineers writing Kubernetes, Helm, or GitHub Actions configs" },
  { zh: "校验 docker-compose.yml 或 CI 文件的后端开发者", en: "Backend developers validating docker-compose.yml or CI pipeline files" },
  { zh: "在 YAML 与 JSON 之间转换配置的数据工程师", en: "Data engineers converting configurations between YAML and JSON" },
  { zh: "学习 YAML 语法的初学者", en: "Anyone learning YAML syntax" },
];

export const WHEN_USE: Bilingual[] = [
  { zh: "Kubernetes 部署失败但 kubectl 没说具体哪里 YAML 错了", en: "Your Kubernetes deployment fails but kubectl doesn't say which YAML line is wrong" },
  { zh: "GitHub Actions workflow 不触发，怀疑 YAML 缩进有问题", en: "A GitHub Actions workflow won't trigger and you suspect an indentation issue" },
  { zh: "拿到一份 JSON 配置，需要转成 YAML 提交给 K8s 或 Helm", en: "You have a JSON config and need to convert it to YAML for K8s or Helm" },
  { zh: "docker-compose.yml 报 'invalid type' 但看不出哪里错", en: "docker-compose.yml reports 'invalid type' but the error isn't specific" },
  { zh: "给同事演示 YAML 语法，需要一个直观的格式化工具", en: "You're teaching YAML to a colleague and need a visual formatting tool" },
];

export const HOWTOS: HowTo[] = [
  {
    id: "validate",
    name: { zh: "如何校验 YAML", en: "How to validate YAML" },
    steps: [
      { zh: "把 YAML 粘贴到校验框", en: "Paste your YAML into the validator input box" },
      { zh: "点击「校验」", en: "Click 'Validate'" },
      { zh: "错误会显示行号、列号和错误信息", en: "Errors display with line number, column, and a message" },
      { zh: "错误行会在左侧行号中标红", en: "The error line is highlighted in red in the line-number gutter" },
    ],
  },
  {
    id: "convert",
    name: { zh: "如何将 YAML 转换为 JSON", en: "How to convert YAML to JSON" },
    steps: [
      { zh: "粘贴 YAML 文本到转换区", en: "Paste YAML text into the converter input" },
      { zh: "点击「YAML → JSON」", en: "Click 'YAML → JSON'" },
      { zh: "复制转换后的 JSON 结果", en: "Copy the converted JSON from the output area" },
    ],
  },
  {
    id: "format",
    name: { zh: "如何格式化 YAML", en: "How to format YAML" },
    steps: [
      { zh: "粘贴 YAML 到校验框", en: "Paste YAML into the validator input box" },
      { zh: "点击「美化」获得标准格式，或「压缩」获得流式格式", en: "Click 'Beautify' for standard format or 'Minify' for flow style" },
      { zh: "复制格式化后的结果", en: "Copy the formatted result" },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: { zh: "YAML Shuttle 免费吗？", en: "Is YAML Shuttle free?" },
    a: { zh: "完全免费。无需注册账号，无广告，不追踪数据。所有功能均可直接使用。", en: "Yes — completely free. No account, no ads, no data tracking. All features are available immediately." },
  },
  {
    q: { zh: "我的 YAML 数据会上传到服务器吗？", en: "Does my YAML data leave my browser?" },
    a: { zh: "不会。所有校验、格式化、转义和转换逻辑均在浏览器本地运行，使用 `yaml` 库（[eemeli/yaml](https://eemeli.org/yaml/) v2，npm 包名 `yaml`）解析。我们的服务器不会接收你的数据，也不做行为分析。", en: "No. All validation, formatting, escaping, and conversion logic runs locally in your browser using the `yaml` library (the [eemeli/yaml](https://eemeli.org/yaml/) v2 npm package). Your data never reaches our servers, and we don't run analytics on it." },
  },
  {
    q: { zh: "支持 YAML 哪个版本？", en: "Which YAML version does it support?" },
    a: { zh: "YAML Shuttle 使用 `yaml` 库（[eemeli/yaml](https://eemeli.org/yaml/) v2，npm 包名 `yaml`），支持 YAML 1.2 核心特性，包括映射、序列、标量、锚点与别名（& 和 *）、多文档（---分隔）、流式风格等。", en: "YAML Shuttle uses the `yaml` library (the [eemeli/yaml](https://eemeli.org/yaml/) v2 npm package) and supports YAML 1.2 core features including mappings, sequences, scalars, anchors and aliases (& and *), multi-document (--- separated), and flow style." },
  },
  {
    q: { zh: "能处理多大的 YAML 文件？", en: "How large a YAML file can I paste?" },
    a: { zh: "建议在 5 MB 以内以获得最佳性能。浏览器引擎能处理更大文件，但 UI 响应会变慢。对于超大文件，考虑使用命令行工具如 yq。", en: "For best performance, keep payloads under ~5 MB. The browser engine can handle larger files, but UI responsiveness drops. For very large files, consider CLI tools like yq." },
  },
  {
    q: { zh: "能保留 YAML 注释吗？", en: "Does it preserve YAML comments?" },
    a: { zh: "不能。当前实现会先把 YAML 解析为 JS 对象、再重新输出，过程中注释会被丢弃——校验、美化、压缩、YAML → JSON 转换均如此。如果你需要保留注释的工作流，建议在浏览器外用支持文档级 AST 的工具处理。", en: "No. The current implementation parses YAML into a JS object and re-emits it, which strips comments — this applies to validate, beautify, minify, and YAML → JSON conversion alike. For a workflow that preserves comments, use a tool that operates on a document-level AST instead." },
  },
  {
    q: { zh: "缩进用 tab 还是空格？", en: "Does it use tabs or spaces for indentation?" },
    a: { zh: "YAML 规范（YAML 1.2）明确禁止使用 tab 缩进。YAML Shuttle 默认使用 2 个空格缩进，符合 Kubernetes 和 Helm 社区惯例。", en: "The YAML spec (YAML 1.2) explicitly forbids tab indentation. YAML Shuttle defaults to 2-space indentation, matching Kubernetes and Helm community conventions." },
  },
  {
    q: { zh: "支持锚点和别名吗？", en: "Does it support anchors and aliases?" },
    a: { zh: "支持。YAML 的锚点（&）和别名（*）语法完全兼容，可以在校验、美化和转换中正确处理。", en: "Yes. YAML anchor (&) and alias (*) syntax is fully supported and works correctly in validation, formatting, and conversion." },
  },
  {
    q: { zh: "YAML Shuttle 和 yamllint 有什么不同？", en: "How is YAML Shuttle different from yamllint?" },
    a: { zh: "yamllint 是 Python 命令行工具，需要安装，侧重规则校验。YAML Shuttle 是浏览器端工具，无需安装，额外提供格式化、YAML/JSON 互转和转义功能。", en: "yamllint is a Python CLI tool that requires installation and focuses on rule-based linting. YAML Shuttle is browser-based with no installation required, and adds formatting, YAML/JSON conversion, and escaping features." },
  },
  {
    q: { zh: "可以离线使用吗？", en: "Can I use YAML Shuttle offline?" },
    a: { zh: "可以。首次加载后整个应用可离线运行。把页面加书签即可在无网络环境下工作。", en: "Yes — after the first load, the entire app runs offline. Bookmark the page and you can work without an internet connection." },
  },
];

export const COMPARISON = {
  zh: {
    heading: "YAML Shuttle 与同类工具对比",
    columns: ["工具", "校验", "格式化", "YAML↔JSON", "本地处理", "免费"],
    rows: [
      ["YAML Shuttle", "✓", "✓", "✓", "✓", "✓"],
      ["yamllint", "✓", "—", "—", "命令行", "✓"],
      ["yq", "✓", "✓", "✓", "命令行", "✓"],
      ["Online YAML Parser", "✓", "✓", "—", "混合", "含广告"],
    ],
  },
  en: {
    heading: "YAML Shuttle vs alternatives",
    columns: ["Tool", "Validate", "Format", "YAML↔JSON", "Local-Only", "Free"],
    rows: [
      ["YAML Shuttle", "✓", "✓", "✓", "✓", "✓"],
      ["yamllint", "✓", "—", "—", "CLI", "✓"],
      ["yq", "✓", "✓", "✓", "CLI", "✓"],
      ["Online YAML Parser", "✓", "✓", "—", "Mixed", "with ads"],
    ],
  },
};

export const HEADINGS = {
  whoFor: { zh: "YAML Shuttle 适合谁？", en: "Who is YAML Shuttle for?" },
  whenUse: { zh: "什么时候用 YAML Shuttle？", en: "When should I use YAML Shuttle?" },
  howTo: { zh: "操作步骤", en: "How to use" },
  faq: { zh: "常见问题", en: "Frequently Asked Questions" },
};

export const aboutFaqData = { FAQS, HOWTOS, COMPARISON };
