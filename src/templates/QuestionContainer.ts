import { TemplateOptions } from "./types";

const Container = `
  flex-wrap: wrap;
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--moodle-blue-light);
  border: solid var(--moodle-blue-dark) 1px;
  border-radius: 6px;
  box-shadow: 0px 1px 3px var(--light-gray);
`;

export default function QuestionContainer(options: TemplateOptions): string {
  const children = Array.isArray(options.children)
    ? options.children.join("")
    : options.children;
  return `<section style="${Container}">${children}</section>`;
}
