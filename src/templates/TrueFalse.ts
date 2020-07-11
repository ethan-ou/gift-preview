import { TemplateOptions, Choice, TrueFalse } from "./types";
import QuestionContainer from "./QuestionContainer";
import TextType from "./TextType";
import GlobalFeedback from "./GlobalFeedback";
import MultipleChoiceAnswers from "./MultipleChoiceAnswers";
import Title from "./Title";

type TrueFalseOptions = TemplateOptions & TrueFalse;

export default function TrueFalse(options: TrueFalseOptions): string {
  const {
    title,
    isTrue,
    stem,
    correctFeedback,
    incorrectFeedback,
    globalFeedback,
  } = options;

  const choices: Choice[] = [
    {
      text: {
        format: "moodle",
        text: "True",
      },
      isCorrect: isTrue,
      weight: null,
      feedback: isTrue ? correctFeedback : incorrectFeedback,
    },
    {
      text: {
        format: "moodle",
        text: "False",
      },
      isCorrect: !isTrue,
      weight: null,
      feedback: !isTrue ? correctFeedback : incorrectFeedback,
    },
  ];

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
