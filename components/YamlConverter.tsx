"use client";

import { useCallback, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { yamlToJson, jsonToYaml } from "@/lib/yaml-converter";
import { InputWithLineNumbers, OutputWithLineNumbers } from "./CodeWithLineNumbers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function YamlConverter() {
  const { t } = useI18n();
  const [input, setInput] = useState("");
  const [convertedText, setConvertedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState<string | null>(null);

  const handleYamlToJson = useCallback(() => {
    setError(null);
    const result = yamlToJson(input);
    if (result.ok) {
      setConvertedText(result.text);
    } else {
      setConvertedText(null);
      setError(result.message);
    }
  }, [input]);

  const handleJsonToYaml = useCallback(() => {
    setError(null);
    const result = jsonToYaml(input);
    if (result.ok) {
      setConvertedText(result.text);
    } else {
      setConvertedText(null);
      setError(result.message);
    }
  }, [input]);

  const handleCopyResult = useCallback(async () => {
    if (!convertedText) return;
    try {
      await navigator.clipboard.writeText(convertedText);
      setCopyLabel(t("yamlConverter.copied"));
      setTimeout(() => setCopyLabel(null), 2000);
    } catch {
      setCopyLabel(null);
    }
  }, [convertedText, t]);

  const handleClear = useCallback(() => {
    setInput("");
    setConvertedText(null);
    setError(null);
    setCopyLabel(null);
  }, []);

  return (
    <Card
      className="border-chart-2/40 bg-chart-2/5"
      aria-labelledby="yaml-converter-title"
    >
      <CardHeader>
        <h2
          id="yaml-converter-title"
          className="text-xl font-bold text-foreground sm:text-2xl"
        >
          {t("yamlConverter.title")}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <InputWithLineNumbers
          aria-label={t("yamlConverter.ariaLabelInput")}
          placeholder={t("yamlConverter.placeholder")}
          value={input}
          onChange={(v) => {
            setInput(v);
            setError(null);
            setConvertedText(null);
          }}
          minHeight={200}
        />

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="lg"
            className="bg-chart-2 text-white hover:bg-chart-2/90"
            aria-label={t("yamlConverter.ariaLabelYamlToJson")}
            onClick={handleYamlToJson}
          >
            {t("yamlConverter.yamlToJson")}
          </Button>
          <Button
            type="button"
            size="lg"
            className="bg-chart-1 text-white hover:bg-chart-1/90"
            aria-label={t("yamlConverter.ariaLabelJsonToYaml")}
            onClick={handleJsonToYaml}
          >
            {t("yamlConverter.jsonToYaml")}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleClear}
          >
            {t("yamlConverter.clear")}
          </Button>
        </div>

        {convertedText !== null && (
          <div
            className="rounded-lg border-2 border-border bg-card"
            role="region"
            aria-label={t("yamlConverter.convertResult")}
          >
            <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
              <span className="text-base font-semibold text-foreground">
                {t("yamlConverter.convertResult")}
              </span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopyResult}
              >
                {copyLabel ?? t("yamlConverter.copyResult")}
              </Button>
            </div>
            <OutputWithLineNumbers
              aria-label={t("yamlConverter.convertResult")}
              value={convertedText}
              minHeight={180}
            />
          </div>
        )}

        {error !== null && (
          <div
            className="rounded-lg border-2 border-destructive/50 bg-destructive/10 p-4"
            role="alert"
          >
            <p className="text-base font-semibold text-destructive">
              {t("yamlConverter.convertFailed")}
            </p>
            <p className="mt-1 font-mono text-sm text-destructive">
              {error}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
