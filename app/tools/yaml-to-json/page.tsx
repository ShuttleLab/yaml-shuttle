import type { Metadata } from "next";
import Link from "next/link";
import YamlConverter from "@/components/YamlConverter";

export const metadata: Metadata = {
  title: "Convert YAML to JSON Online — Free, Local, Instant | YAML Shuttle",
  description:
    "Convert YAML to JSON and JSON to YAML in your browser. No data uploaded, no signup required. Supports YAML 1.2 with anchors, aliases, and multi-document.",
  alternates: { canonical: "/tools/yaml-to-json" },
  openGraph: {
    title: "Convert YAML to JSON Online — Free, Private, Instant",
    description:
      "Convert between YAML and JSON formats. All processing happens locally in your browser.",
    type: "article",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to convert YAML to JSON online with YAML Shuttle",
  description:
    "Convert a YAML document to JSON format without uploading data to any server.",
  totalTime: "PT10S",
  tool: { "@type": "HowToTool", name: "Web browser" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Paste YAML", text: "Paste your YAML into the input box on YAML Shuttle." },
    { "@type": "HowToStep", position: 2, name: "Click YAML → JSON", text: "Click the 'YAML → JSON' button to convert." },
    { "@type": "HowToStep", position: 3, name: "Copy JSON", text: "Copy the converted JSON from the output area." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the YAML to JSON converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. YAML Shuttle's converter is completely free with no signup or ads. The entire tool runs in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Does the converter send my data to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Conversion happens entirely client-side using the eemeli/yaml v2 library (npm package `yaml`). Your data never reaches our servers, making it safe for Kubernetes configs, API credentials, and other sensitive files.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to YAML comments during conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comments are dropped during YAML → JSON conversion because the JSON specification (RFC 8259) does not support comments. The data structure and values are preserved exactly.",
      },
    },
    {
      "@type": "Question",
      name: "Does it support YAML anchors and aliases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. YAML anchors (&) and aliases (*) are resolved during conversion. The referenced values are expanded inline in the JSON output.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert JSON back to YAML?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Click the 'JSON → YAML' button to convert JSON input to YAML format. The output uses 2-space indentation by default.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Convert YAML to JSON Online — Free, Local, Instant",
  description:
    "Complete guide to converting YAML to JSON in your browser: when you need it, what's preserved vs lost, and how to do it without uploading sensitive data.",
  author: { "@type": "Organization", name: "ShuttleLab" },
  publisher: { "@type": "Organization", name: "ShuttleLab", url: "https://shuttlelab.org" },
  url: "https://yaml.shuttlelab.org/tools/yaml-to-json",
};

export default function YamlToJsonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Convert YAML to JSON Online — Free, Local, Instant
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Paste YAML and get JSON (or vice versa) instantly. All conversion
            happens in your browser — your data never leaves your device.
          </p>
        </header>

        {/* Embedded tool */}
        <section className="mb-12">
          <YamlConverter />
        </section>

        <section className="prose prose-base max-w-none space-y-12 text-foreground">
          <div>
            <h2 className="text-2xl font-bold mb-3">Why convert YAML to JSON?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <strong>API compatibility</strong> — many REST APIs and
                serverless platforms accept only JSON. Converting your YAML
                config lets you POST it directly.
              </li>
              <li>
                <strong>Tool integration</strong> — tools like jq, JSONPath
                validators, and schema validators work exclusively with JSON.
              </li>
              <li>
                <strong>Data exchange</strong> — JSON is the lingua franca of
                web services. Converting YAML configs to JSON makes them
                consumable by any system.
              </li>
              <li>
                <strong>Debugging</strong> — JSON&apos;s stricter syntax (quoted
                keys, no anchors) can help surface structural issues hidden by
                YAML&apos;s flexibility.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              What&apos;s preserved vs lost in conversion
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">Preserved</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm leading-relaxed">
                  <li>All data values and types</li>
                  <li>Nested structure (mappings, sequences)</li>
                  <li>Anchor and alias references (expanded inline)</li>
                  <li>Multi-document separators (converted to JSON arrays)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">Lost</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm leading-relaxed">
                  <li>Comments (JSON has no comment syntax)</li>
                  <li>Original formatting and indentation</li>
                  <li>YAML-specific tags (e.g., !!str, !!int)</li>
                  <li>Document start/end markers (---)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How to convert YAML to JSON with YAML Shuttle
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Paste your YAML</strong> into the input box at the top
                of this page.
              </li>
              <li>
                <strong>Click &ldquo;YAML → JSON&rdquo;</strong>. YAML Shuttle
                parses the YAML and re-emits it as valid JSON.
              </li>
              <li>
                <strong>Copy the JSON</strong> from the output area. The result
                is RFC 8259-compliant JSON with 2-space indentation.
              </li>
            </ol>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Need to go the other direction? Click &ldquo;JSON → YAML&rdquo; to
              convert JSON input into YAML format.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Common conversion edge cases
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold mb-1">
                  Anchors and aliases
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  YAML anchors (<code className="text-xs bg-muted px-1 py-0.5 rounded">&amp;default</code>) and aliases (<code className="text-xs bg-muted px-1 py-0.5 rounded">*default</code>) are resolved during conversion. The referenced value is duplicated at each alias point in the JSON output.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Multi-document YAML
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  YAML files with <code className="text-xs bg-muted px-1 py-0.5 rounded">---</code> separators are treated as multiple documents. YAML Shuttle converts each document and wraps them in a JSON array.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  YAML-specific types
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  YAML tags like <code className="text-xs bg-muted px-1 py-0.5 rounded">!!str</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">!!int</code>, and <code className="text-xs bg-muted px-1 py-0.5 rounded">!!float</code> are stripped. Values are converted to their JSON equivalents (string, number, boolean, null).
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Unicode and special characters
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Unicode characters are preserved as-is in the JSON output. Special characters that require escaping in JSON strings (quotes, backslashes) are properly escaped.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name}>
                  <dt className="font-semibold mb-2">{q.name}</dt>
                  <dd className="text-muted-foreground leading-relaxed">
                    {q.acceptedAnswer.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Related YAML tools</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary underline">
                  YAML Validator
                </Link>{" "}
                — check if your YAML is well-formed
              </li>
              <li>
                <Link href="/tools/format" className="text-primary underline">
                  YAML Formatter
                </Link>{" "}
                — beautify or minify YAML
              </li>
              <li>
                <Link href="/" className="text-primary underline">
                  YAML Escape / Unescape
                </Link>{" "}
                — escape strings for embedding inside YAML
              </li>
              <li>
                <Link href="/about" className="text-primary underline">
                  About YAML Shuttle
                </Link>{" "}
                — privacy, use cases, full FAQ
              </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
