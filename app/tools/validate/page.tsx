import type { Metadata } from "next";
import Link from "next/link";
import YamlValidator from "@/components/YamlValidator";

export const metadata: Metadata = {
  title: "Validate YAML Syntax Online — Free, No Sign-up | YAML Shuttle",
  description:
    "Check your YAML for syntax errors with line and column numbers. Free browser-based validator — no data uploaded, works offline. Supports YAML 1.2.",
  alternates: { canonical: "/tools/validate" },
  openGraph: {
    title: "Validate YAML Syntax Online — Free, No Sign-up",
    description:
      "Check YAML syntax errors with line and column numbers. All processing happens locally in your browser.",
    type: "article",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to validate YAML syntax online with YAML Shuttle",
  description:
    "Check a YAML document for syntax errors and get line-by-line error reporting.",
  totalTime: "PT10S",
  tool: { "@type": "HowToTool", name: "Web browser" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Paste YAML", text: "Paste your YAML into the input box on YAML Shuttle." },
    { "@type": "HowToStep", position: 2, name: "Click Validate", text: "Click the 'Validate' button to check for syntax errors." },
    { "@type": "HowToStep", position: 3, name: "Read errors", text: "Errors display with line number, column, and a descriptive message. The error line is highlighted in red." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the YAML validator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. YAML Shuttle's validator is completely free with no signup or ads. The entire tool runs in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Does the validator send my YAML to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Validation happens entirely client-side using the eemeli/yaml v2 library (npm package `yaml`). Your data never reaches our servers, making it safe for sensitive configurations like Kubernetes secrets and API keys.",
      },
    },
    {
      "@type": "Question",
      name: "What YAML version does it validate against?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YAML Shuttle validates against YAML 1.2 core specification using the eemeli/yaml v2 library (npm package `yaml`). This covers mappings, sequences, scalars, anchors, aliases, and flow style.",
      },
    },
    {
      "@type": "Question",
      name: "Does it show where the error is?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each error includes the line number, column number, and a descriptive message. The error line is highlighted in red in the line-number gutter so you can spot it immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Can it validate Kubernetes YAML?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YAML Shuttle validates YAML syntax, not Kubernetes schema. It catches indentation errors, missing colons, and malformed values. For K8s-specific schema validation, use kubectl dry-run or kubeval.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Validate YAML Syntax Online — Free, No Sign-up",
  description:
    "Complete guide to validating YAML syntax in your browser: common YAML errors, how the validator reports them, and how to fix them without uploading sensitive data.",
  author: { "@type": "Organization", name: "ShuttleLab" },
  publisher: { "@type": "Organization", name: "ShuttleLab", url: "https://shuttlelab.org" },
  url: "https://yaml.shuttlelab.org/tools/validate",
};

export default function ValidateYamlPage() {
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
            Validate YAML Syntax Online — Free, No Sign-up
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Paste your YAML below and check for syntax errors instantly. Error
            lines are highlighted with line and column numbers. Runs entirely in
            your browser — no data uploaded.
          </p>
        </header>

        {/* Embedded tool */}
        <section className="mb-12">
          <YamlValidator />
        </section>

        <section className="prose prose-base max-w-none space-y-12 text-foreground">
          <div>
            <h2 className="text-2xl font-bold mb-3">What is YAML syntax validation?</h2>
            <p className="text-muted-foreground leading-relaxed">
              YAML syntax validation checks whether a YAML document follows the
              rules of the YAML 1.2 specification. A valid YAML file has correct
              indentation, proper key-value separators, and well-formed data
              structures. Invalid YAML causes parse errors in tools like
              Kubernetes, Helm, Docker Compose, and GitHub Actions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              YAML Shuttle reports the exact line and column of each error, plus
              a descriptive message explaining what went wrong. The error line is
              highlighted in red in the line-number gutter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">When do you need to validate YAML?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <strong>Kubernetes deployment fails</strong> —{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">kubectl apply</code>{" "}
                rejects your manifest but the error message doesn&apos;t say which
                line is wrong.
              </li>
              <li>
                <strong>GitHub Actions won&apos;t trigger</strong> — a workflow file
                with indentation errors silently fails to register.
              </li>
              <li>
                <strong>docker-compose reports &quot;invalid type&quot;</strong> — the
                error is generic; validation shows the exact line.
              </li>
              <li>
                <strong>Helm template rendering fails</strong> —{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">values.yaml</code>{" "}
                has a syntax issue that prevents chart installation.
              </li>
              <li>
                <strong>CI pipeline breaks</strong> — your{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">.gitlab-ci.yml</code>{" "}
                or{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">bitbucket-pipelines.yml</code>{" "}
                has a YAML error.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How to validate YAML with YAML Shuttle
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Paste your YAML</strong> into the input box at the top
                of this page.
              </li>
              <li>
                <strong>Click &ldquo;Validate&rdquo;</strong>. YAML Shuttle
                parses the document and reports any errors.
              </li>
              <li>
                <strong>Read the error messages</strong>. Each error shows line
                number, column, and a description. The error line is
                highlighted in red.
              </li>
            </ol>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              If your YAML is valid, you&apos;ll see a green &ldquo;Valid YAML&rdquo;
              confirmation. You can then use the{" "}
              <Link href="/tools/format" className="text-primary underline">
                formatter
              </Link>{" "}
              to beautify or minify it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Common YAML syntax errors
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold mb-1">
                  Tab indentation
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  The YAML 1.2 spec forbids tab characters for indentation.
                  Use spaces only. Two spaces is the standard for Kubernetes
                  and Helm charts.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Missing colon after key
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Every mapping key must be followed by a colon and a space:{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">key: value</code>.
                  Writing{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">key value</code>{" "}
                  is invalid YAML.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Incorrect list item indentation
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  List items (<code className="text-xs bg-muted px-1 py-0.5 rounded">-</code>)
                  under a mapping key must be indented relative to the key.
                  A hyphen at the same level as its parent key causes a
                  parse error.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Unquoted special characters
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Values containing <code className="text-xs bg-muted px-1 py-0.5 rounded">:</code>,{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#</code>,{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">[</code>, or{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">{"{"}</code>{" "}
                  must be quoted. Otherwise YAML interprets them as syntax
                  elements.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Duplicate keys
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  YAML 1.2 forbids duplicate mapping keys, but most parsers
                  silently accept them and use the last value. The `yaml`
                  library used by YAML Shuttle follows this lenient behavior
                  — so if you have duplicate keys, validation may pass but
                  the parsed value reflects only the last occurrence.
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
                <Link href="/tools/format" className="text-primary underline">
                  YAML Formatter
                </Link>{" "}
                — beautify or minify YAML
              </li>
              <li>
                <Link href="/tools/yaml-to-json" className="text-primary underline">
                  YAML to JSON Converter
                </Link>{" "}
                — convert between YAML and JSON
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
