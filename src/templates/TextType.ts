import marked from "marked";
import { TemplateOptions, TextFormat } from "./types";

interface TextTypeOptions extends TemplateOptions {
  text: TextFormat;
}

export default function TextType(options: TextTypeOptions): string {
  const { text } = options;
  switch (text.format) {
    case "moodle":
    case "plain":
      return text.text;
    case "html":
      return text.text.trim().replace(/(^<p>)(.*?)(<\/p>)$/gm, "$2");
    case "markdown":
      return marked(text.text)
        .trim()
        .replace(/(^<p>)(.*?)(<\/p>)$/gm, "$2");
    default:
      return ``;
  }
}
