import { TemplateOptions, MultipleChoice } from "./types";
import QuestionContainer from "./QuestionContainer";
import GlobalFeedback from "./GlobalFeedback";
import Title from "./Title";
import TextType from "./TextType";
import MultipleChoiceAnswers from "./MultipleChoiceAnswers";

type MultipleChoiceOptions = TemplateOptions & MultipleChoice;

export default function MultipleChoice(options: MultipleChoiceOptions): string {
  const { title, stem, choices, globalFeedback } = options;

  return `${QuestionContainer({
    children: [
      Title({
        type: "Multiple Choice",
        title: title,
      }),
      `<p>${TextType({
        text: stem,
      })}</p>`,
      MultipleChoiceAnswers({ choices: choices }),
      GlobalFeedback({ feedback: globalFeedback }),
    ],
  })}`;
}
