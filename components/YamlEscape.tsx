"use client";

import { useCallback, useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  escapeYamlString,
  unescapeYamlString,
} from "@/lib/yaml-validator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function YamlEscape() {
  const { t } = useI18n();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState<string | null>(null);

  const handleEscape = useCallback(() => {
    setError(null);
    setOutput(escapeYamlString(input));
  }, [input]);

  const handleUnescape = useCallback(() => {
    setError(null);
    const result = unescapeYamlString(input);
    if (result.ok) {
      setOutput(result.text);
    } else {
      setOutput("");
      setError(result.message);
    }
  }, [input]);

  const handleCopyOutput = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopyLabel(t("yamlEscape.copied"));
      setTimeout(() => setCopyLabel(null), 2000);
    } catch {
      setCopyLabel(null);
    }
  }, [output, t]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError(null);
    setCopyLabel(null);
  }, []);

  return (
    <Card
      className="border-chart-3/40 bg-chart-3/5"
      aria-labelledby="yaml-escape-title"
    >
      <CardHeader>
        <h2
          id="yaml-escape-title"
          className="text-xl font-bold text-foreground sm:text-2xl"
        >
          {t("yamlEscape.title")}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="yaml-escape-input" className="sr-only">
            {t("yamlEscape.ariaLabelInput")}
          </label>
          <Textarea
            id="yaml-escape-input"
            aria-label={t("yamlEscape.ariaLabelInput")}
            className="min-h-[120px] resize-y"
            placeholder={t("yamlEscape.inputPlaceholder")}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(null);
            }}
            spellCheck={false}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="lg"
            className="bg-chart-2 text-white hover:bg-chart-2/90"
            aria-label={t("yamlEscape.ariaLabelEscape")}
            onClick={handleEscape}
          >
            {t("yamlEscape.escape")}
          </Button>
          <Button
            type="button"
            size="lg"
            className="bg-chart-1 text-white hover:bg-chart-1/90"
            aria-label={t("yamlEscape.ariaLabelUnescape")}
            onClick={handleUnescape}
          >
            {t("yamlEscape.unescape")}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleCopyOutput}
            disabled={!output}
          >
            {copyLabel ?? t("yamlEscape.copyOutput")}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleClear}
          >
            {t("yamlValidator.clear")}
          </Button>
        </div>

        <div>
          <label htmlFor="yaml-escape-output" className="sr-only">
            {t("yamlEscape.ariaLabelOutput")}
          </label>
          <Textarea
            id="yaml-escape-output"
            readOnly
            aria-label={t("yamlEscape.ariaLabelOutput")}
            className="min-h-[120px] resize-y bg-muted/80"
            placeholder={t("yamlEscape.outputPlaceholder")}
            value={output}
          />
        </div>

        {error !== null && (
          <div
            className="rounded-lg border-2 border-destructive/50 bg-destructive/10 p-4"
            role="alert"
          >
            <p className="text-base font-semibold text-destructive">
              {t("yamlEscape.unescapeError")}: {error}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
