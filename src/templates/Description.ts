import { TemplateOptions, Description } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";
import TextType from "./TextType";

type DescriptionOptions = TemplateOptions & Description;

export default function Description(options: DescriptionOptions): string {
  const { title, stem } = options;
  return `${QuestionContainer({
    children: [
      Title({
        type: "Description",
        title: title,
      }),
      `<p>${TextType({
        text: stem,
      })}</p>`,
    ],
  })}`;
}
