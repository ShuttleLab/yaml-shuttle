/**
 * YAML 校验：解析并提取错误位置（行、列、信息）
 */

import { parse, stringify } from "yaml";

export type YamlValidateSuccess = {
  ok: true;
  value: unknown;
};

export type YamlValidateError = {
  ok: false;
  message: string;
  line: number;
  column: number;
  position: number;
  snippet?: string;
  pointer?: string;
};

export type YamlValidateResult = YamlValidateSuccess | YamlValidateError;

/**
 * 校验 YAML 文本。成功返回 { ok: true, value }；失败返回行、列、错误信息及错误行片段。
 */
export function validateYaml(input: string): YamlValidateResult {
  const trimmed = input.trim();
  if (trimmed === "") {
    return {
      ok: false,
      message: "请输入 YAML 文本",
      line: 1,
      column: 1,
      position: 0,
    };
  }

  try {
    const value = parse(input);
    return { ok: true, value };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    let line = 1;
    let column = 1;
    let position = 0;

    if (e && typeof e === "object") {
      const err = e as Record<string, unknown>;
      if (Array.isArray(err.linePos) && err.linePos[0]) {
        const lp = err.linePos[0] as { line?: number; col?: number };
        line = lp.line ?? 1;
        column = lp.col ?? 1;
      }
      if (Array.isArray(err.pos) && typeof err.pos[0] === "number") {
        position = err.pos[0];
      }
    }

    const lines = input.split("\n");
    const snippet = lines[line - 1] ?? "";
    const pointer =
      column > 0 && column <= snippet.length + 1
        ? " ".repeat(Math.max(0, column - 1)) + "^"
        : undefined;

    return {
      ok: false,
      message,
      line,
      column,
      position,
      snippet: snippet || undefined,
      pointer,
    };
  }
}

export type YamlFormatResult =
  | { ok: true; text: string }
  | { ok: false; message: string };

const DEFAULT_INDENT = 2;

/**
 * 将 YAML 美化为标准格式（带缩进）。无效 YAML 返回 { ok: false, message }。
 */
export function beautifyYaml(
  input: string,
  indent: number = DEFAULT_INDENT
): YamlFormatResult {
  const validated = validateYaml(input);
  if (!validated.ok) {
    return { ok: false, message: validated.message };
  }
  try {
    const text = stringify(validated.value, { indent });
    return { ok: true, text: text.trimEnd() };
  } catch {
    return { ok: false, message: "序列化失败" };
  }
}

/**
 * 将 YAML 压缩为流式（Flow）格式。无效 YAML 返回 { ok: false, message }。
 */
export function minifyYaml(input: string): YamlFormatResult {
  const validated = validateYaml(input);
  if (!validated.ok) {
    return { ok: false, message: validated.message };
  }
  try {
    const text = stringify(validated.value, { collectionStyle: "flow" });
    return { ok: true, text: text.trimEnd() };
  } catch {
    return { ok: false, message: "序列化失败" };
  }
}

/**
 * 将字符串按 YAML 规则转义（自动加引号处理特殊字符），便于嵌入 YAML 文档。
 */
export function escapeYamlString(input: string): string {
  return stringify(input).trimEnd();
}

export type YamlUnescapeResult =
  | { ok: true; text: string }
  | { ok: false; message: string };

/**
 * 将 YAML 字符串值（含引号/转义序列）还原为原始文本。
 */
export function unescapeYamlString(input: string): YamlUnescapeResult {
  try {
    const value = parse(input);
    if (value === null || value === undefined) {
      return { ok: true, text: "" };
    }
    if (
      typeof value !== "string" &&
      typeof value !== "number" &&
      typeof value !== "boolean"
    ) {
      return { ok: false, message: "输入不是标量类型的 YAML 值" };
    }
    return { ok: true, text: String(value) };
  } catch (e) {
    return {
      ok: false,
      message: e instanceof Error ? e.message : String(e),
    };
  }
}
