import { useMemo } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import plaintext from "highlight.js/lib/languages/plaintext";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("plaintext", plaintext);

/**
 * Splits highlight.js output into lines without breaking markup.
 *
 * A single hljs span can span multiple lines (a block comment, a template literal), so a
 * naive `.split("\n")` produces unbalanced HTML. This closes every open tag at the end of
 * a line and reopens it at the start of the next, which is what makes per-line ✓/✗ markers
 * safe to wrap around the result.
 */
function splitHighlightedLines(html: string): string[] {
  const lines: string[] = [];
  const open: string[] = [];
  let current = "";
  let i = 0;

  while (i < html.length) {
    const ch = html[i];
    if (ch === "<") {
      const end = html.indexOf(">", i);
      const tag = html.slice(i, end + 1);
      if (tag.startsWith("</")) open.pop();
      else open.push(tag);
      current += tag;
      i = end + 1;
    } else if (ch === "\n") {
      lines.push(current + "</span>".repeat(open.length));
      current = open.join("");
      i += 1;
    } else {
      current += ch;
      i += 1;
    }
  }
  lines.push(current);
  return lines;
}

type Props = {
  /** The snippet, as plain source text — no hand-tagged markup. */
  code: string;
  /** Any language registered above; defaults to TSX since most snippets are React. */
  language?: string;
  /** 1-indexed lines to flag with a green ✓ (the "do this" side of a comparison). */
  good?: number[];
  /** 1-indexed lines to flag with a red ✗ (the "don't do this" side). */
  bad?: number[];
};

export default function CodeBlock({ code, language = "tsx", good, bad }: Props) {
  const html = useMemo(() => {
    const highlighted = hljs.highlight(code.trim(), { language }).value;
    if (!good?.length && !bad?.length) return highlighted;

    return splitHighlightedLines(highlighted)
      .map((line, idx) => {
        const n = idx + 1;
        if (good?.includes(n)) return `<span class="line-good">${line}</span>`;
        if (bad?.includes(n)) return `<span class="line-bad">${line}</span>`;
        return line;
      })
      .join("\n");
  }, [code, language, good, bad]);

  return (
    <pre>
      <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
