import { TemplateOptions } from "./types";

interface TitleOptions extends TemplateOptions {
  type: string;
  title: string | null;
}

const Container = `
  display: flex;
  font-weight: bold;
`;

const OptionalTitle = `
  color: var(--moodle-blue-darker)
`;

const QuestionType = `
  color: var(--moodle-blue-darkest);
  margin-left: auto;
  padding-left: 0.75rem;
  flex: none;
`;

const QuestionTypeRaised = `
  box-shadow: 0px 1px 3px var(--light-gray);
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 4px;
  background-color: var(--moodle-blue-lighter);
`;

export default function Title(options: TitleOptions): string {
  return `
  <div style="${Container}">
    <span>
      ${
        options.title !== null
          ? options.title
          : `<span style="${OptionalTitle}">Optional Title...</span>`
      }
    </span>
    <span style="${QuestionType}">
      <span style="${QuestionTypeRaised}">${options.type}</span>
    </span>
  </div>
`;
}
