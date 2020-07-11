import { TemplateOptions, TextFormat, Choice, Numerical } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";
import TextType from "./TextType";
import GlobalFeedback from "./GlobalFeedback";

type NumericalOptions = TemplateOptions & Numerical;

interface NumericalAnswerOptions extends TemplateOptions {
  choices: Choice[];
}

export default function Numerical(options: NumericalOptions): string {
  const { title, stem, choices, globalFeedback } = options;
  return `${QuestionContainer({
    children: [
      Title({
        type: "Numerical",
        title: options.title,
      }),
      `<p>${TextType({
        text: options.stem,
      })}</p>`,
      NumericalAnswers({ choices: choices }),
      GlobalFeedback({ feedback: globalFeedback }),
    ],
  })}`;
}

function NumericalAnswers(options: NumericalAnswerOptions): string {
  const { choices } = options;
  const placeholder = Array.isArray(choices)
    ? choices.map((choice) => Answer(choice.text)).join(", ")
    : Answer(choices);

  return `
    <div>
        Answer: <input type="text", placeholder="${placeholder}">
    </div>
    `;
}

function Answer(choice: any): string {
  switch (choice.type) {
    case "simple":
      return `${choice.number}`;
    case "range":
      return `${choice.number} ± ${choice.range}`;
    case "high-low":
      return `${choice.numberLow} - ${choice.numberHigh}`;
    default:
      return ``;
  }
}
