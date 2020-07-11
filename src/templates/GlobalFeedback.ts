import { TemplateOptions, TextFormat } from "./types";
import TextType from "./TextType";

interface GlobalFeedbackOptions extends TemplateOptions {
  feedback: TextFormat | null;
}

const Container = `
  position: relative;
  margin-top: 1rem;
  padding: 0 1rem;
  background-color: var(--moodle-alt-light);
  color: var(--moodle-alt-darkest);
  border: solid var(--moodle-alt) 1px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px var(--light-gray);
`;

export default function GlobalFeedback(options: GlobalFeedbackOptions): string {
  return options.feedback !== null
    ? `<div style="${Container}">
        <p>${TextType({ text: options.feedback })}</p>
      </div>`
    : ``;
}
