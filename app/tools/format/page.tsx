import type { Metadata } from "next";
import Link from "next/link";
import YamlValidator from "@/components/YamlValidator";

export const metadata: Metadata = {
  title: "Format YAML Online — Free Browser-Based YAML Formatter | YAML Shuttle",
  description:
    "Paste your YAML and get a clean, indented version instantly. Runs entirely in your browser — your data never leaves your device. Free, no signup, works offline.",
  alternates: { canonical: "/tools/format" },
  openGraph: {
    title: "Format YAML Online — Free, Private, Instant",
    description:
      "Paste minified or messy YAML and get a clean, indented version. All processing happens locally in your browser.",
    type: "article",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to format YAML online with YAML Shuttle",
  description:
    "Format minified or messy YAML into a clean, indented version that's easy to read.",
  totalTime: "PT10S",
  tool: { "@type": "HowToTool", name: "Web browser" },
  step: [
    { "@type": "HowToStep", position: 1, name: "Paste YAML", text: "Paste your YAML into the input box on YAML Shuttle." },
    { "@type": "HowToStep", position: 2, name: "Click Beautify", text: "Click the 'Beautify' button to format with 2-space indentation." },
    { "@type": "HowToStep", position: 3, name: "Copy result", text: "Copy the formatted YAML from the output area." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the YAML formatter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. YAML Shuttle's formatter is completely free with no signup or ads. The entire tool runs in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Does the formatter send my YAML to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Formatting happens entirely client-side. Your YAML is processed by JavaScript running in your browser and never sent to any server. This makes YAML Shuttle suitable for sensitive data like Kubernetes secrets or API credentials.",
      },
    },
    {
      "@type": "Question",
      name: "What indentation does the formatter use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YAML Shuttle defaults to 2-space indentation, which matches the Kubernetes and Helm community conventions. The YAML 1.2 spec forbids tab characters, so the formatter always uses spaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can the formatter handle large YAML files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For best performance, keep input under ~5 MB. Modern browsers can handle larger files but the UI may slow down. For multi-gigabyte YAML, consider streaming tools like yq instead.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After the page loads once, you can disconnect and the formatter still works. Bookmark the page for offline use.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Format YAML Online — Free Browser-Based YAML Formatter",
  description:
    "Complete guide to formatting YAML in your browser: what YAML formatting means, when you need it, and how to do it safely without uploading sensitive data.",
  author: { "@type": "Organization", name: "ShuttleLab" },
  publisher: { "@type": "Organization", name: "ShuttleLab", url: "https://shuttlelab.org" },
  url: "https://yaml.shuttlelab.org/tools/format",
};

export default function FormatYamlPage() {
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
            Format YAML Online — Free, Private, Instant
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Paste minified or messy YAML below and get a clean, indented version
            instantly. Runs entirely in your browser — your data never leaves
            your device.
          </p>
        </header>

        {/* Embedded tool */}
        <section className="mb-12">
          <YamlValidator />
        </section>

        <section className="prose prose-base max-w-none space-y-12 text-foreground">
          <div>
            <h2 className="text-2xl font-bold mb-3">What is YAML formatting?</h2>
            <p className="text-muted-foreground leading-relaxed">
              YAML formatting (also called <em>pretty-printing</em> or{" "}
              <em>beautifying</em>) rewrites a YAML document with consistent
              indentation, line breaks, and spacing so it is readable by
              humans. The data itself does not change — only the whitespace.
              Minified YAML like{" "}
              <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                {`name: Ada skills: [math, logic]`}
              </code>{" "}
              becomes:
            </p>
            <pre className="bg-muted p-4 rounded mt-3 text-sm overflow-x-auto">
              {`name: Ada
skills:
  - math
  - logic`}
            </pre>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">When do you need to format YAML?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <strong>Kubernetes deployments</strong> — a misindented{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">containerPort</code>{" "}
                causes silent failures. Formatted YAML makes structure visible.
              </li>
              <li>
                <strong>Helm charts</strong> — complex nested values files are
                impossible to scan when everything is on one line.
              </li>
              <li>
                <strong>GitHub Actions workflows</strong> — indentation errors
                in{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">.github/workflows/*.yml</code>{" "}
                silently prevent triggers.
              </li>
              <li>
                <strong>Code reviews</strong> — formatted YAML diffs cleanly in
                git or any diff tool.
              </li>
              <li>
                <strong>Debugging docker-compose</strong> — a{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">docker-compose.yml</code>{" "}
                with wrong indentation reports &quot;invalid type&quot; without
                pointing to the line.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How to format YAML with YAML Shuttle
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Paste your YAML</strong> into the input box at the top
                of this page.
              </li>
              <li>
                <strong>Click &ldquo;Beautify&rdquo;</strong>. YAML Shuttle
                parses your input and re-emits it with 2-space indentation.
              </li>
              <li>
                <strong>Copy the result</strong> from the output area. The
                formatted version is valid YAML 1.2, semantically equivalent
                to your input.
              </li>
            </ol>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              If your YAML has syntax errors, the formatter will show the line
              and column of the first error. Use the{" "}
              <Link href="/" className="text-primary underline">
                validation mode
              </Link>{" "}
              to see detailed error messages with the problematic line
              highlighted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Common YAML formatting issues
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold mb-1">
                  Tab indentation
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  The YAML 1.2 spec explicitly forbids tab characters for
                  indentation. Use spaces only — 2 spaces is the community
                  standard for Kubernetes and Helm.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Missing colon after key
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Every mapping key must be followed by a colon and a space:{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    key: value
                  </code>
                  . Writing{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    key value
                  </code>{" "}
                  is invalid.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Incorrect list indentation
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  List items under a mapping key must be indented relative to
                  the key. A hyphen at the same level as its parent key causes
                  a parse error.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Mixed tabs and spaces
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Mixing tabs and spaces produces unpredictable parsing
                  behavior. YAML Shuttle&apos;s beautifier normalizes everything to
                  spaces.
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
                <Link href="/tools/yaml-to-json" className="text-primary underline">
                  YAML to JSON Converter
                </Link>{" "}
                — convert YAML to JSON format
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
