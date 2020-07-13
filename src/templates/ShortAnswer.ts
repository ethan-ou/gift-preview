import { TemplateOptions, Choice, ShortAnswer, TextFormat } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";
import TextType from "./TextType";
import GlobalFeedback from "./GlobalFeedback";

type ShortAnswerOptions = TemplateOptions & ShortAnswer;

interface AnswerOptions extends TemplateOptions {
  choices: Choice[];
}

export default function ShortAnswer(options: ShortAnswerOptions): string {
  const { title, stem, choices, globalFeedback } = options;
  return `${QuestionContainer({
    children: [
      Title({
        type: "Short Answer",
        title: title,
      }),
      `<p>${TextType({
        text: stem,
      })}</p>`,
      Answers({ choices: choices }),
      GlobalFeedback({ feedback: globalFeedback }),
    ],
  })}`;
}

function Answers(options: AnswerOptions): string {
  const { choices } = options;
  const placeholder = choices
    .map((choice) => TextType({ text: choice.text as TextFormat }))
    .join(", ");
  return `
      <div>
        Answer: <input type="text" placeholder="${placeholder}">
      </div>
    `;
}
