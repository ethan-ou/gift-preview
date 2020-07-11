import { TemplateOptions, Essay } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";
import TextType from "./TextType";
import GlobalFeedback from "./GlobalFeedback";

type EssayOptions = TemplateOptions & Essay;

export default function Essay(options: EssayOptions): string {
  const { title, stem, globalFeedback } = options;

  return `${QuestionContainer({
    children: [
      Title({
        type: "Essay",
        title: title,
      }),
      `<p>${TextType({
        text: stem,
      })}</p>`,
      `<textarea></textarea>`,
      GlobalFeedback({ feedback: globalFeedback }),
    ],
  })}`;
}
