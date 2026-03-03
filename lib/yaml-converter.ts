/**
 * YAML ↔ JSON 互转
 */

import { parse, stringify } from "yaml";

export type ConvertResult =
  | { ok: true; text: string }
  | { ok: false; message: string };

/**
 * 将 YAML 文本转换为 JSON（带缩进）。
 */
export function yamlToJson(input: string): ConvertResult {
  const trimmed = input.trim();
  if (trimmed === "") {
    return { ok: false, message: "请输入 YAML 文本" };
  }
  try {
    const value = parse(trimmed);
    return { ok: true, text: JSON.stringify(value, null, 2) };
  } catch (e) {
    return {
      ok: false,
      message: e instanceof Error ? e.message : String(e),
    };
  }
}

/**
 * 将 JSON 文本转换为 YAML（标准缩进格式）。
 */
export function jsonToYaml(input: string): ConvertResult {
  const trimmed = input.trim();
  if (trimmed === "") {
    return { ok: false, message: "请输入 JSON 文本" };
  }
  try {
    const value = JSON.parse(trimmed);
    return { ok: true, text: stringify(value, { indent: 2 }).trimEnd() };
  } catch (e) {
    return {
      ok: false,
      message: e instanceof Error ? e.message : String(e),
    };
  }
}
