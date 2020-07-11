import { nanoid } from "nanoid";
import { TemplateOptions, TextFormat, Choice, Template } from "./types";
import TextType from "./TextType";
import AnswerIcon from "./AnswerIcon";

interface MultipleChoiceAnswerOptions extends TemplateOptions {
  choices: Choice[];
}

interface AnswerFeedbackOptions extends TemplateOptions {
  feedback: TextFormat | null;
}

interface AnswerWeightOptions extends TemplateOptions {
  weight: number | null;
  correct: boolean;
}

export default function MultipleChoiceAnswers(
  options: MultipleChoiceAnswerOptions
) {
  const { choices } = options;
  const id = `id${nanoid(8)}`;

  const isMultipleAnswer =
    choices.filter((choice) => choice.isCorrect).length === 0;

  const prompt = `Select one${isMultipleAnswer ? " or more" : ""}:`;

  const result = choices
    .map((choice) => {
      const CustomInput = `
          display: block;
          padding: 0.2em 0 0.2em 0;
        `;

      const { weight, isCorrect, text, feedback } = choice;
      const isPositiveWeight = weight !== null && weight > 0;
      const isCorrectOption = isMultipleAnswer ? isPositiveWeight : isCorrect;

      return `
        <label style="${CustomInput}">
          <input type="${isMultipleAnswer ? "checkbox" : "radio"}" name="${id}">
          ${AnswerWeight({ correct: isCorrectOption, weight: weight })}
          ${TextType({ text: text as TextFormat })}
          ${AnswerIcon({ correct: isCorrectOption })}
          ${AnswerFeedback({ feedback: feedback })}
          </input>
        </label>
        `;
    })
    .join("");

  return `${prompt}${result}`;
}

function AnswerWeight(options: AnswerWeightOptions): string {
  const { weight, correct } = options;

  const Container = `
      background-color: var(--moodle-alt-light);
      box-shadow: 0px 1px 1px var(--light-gray);
      border-radius: 3px;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      padding-top: 0.05rem;
      padding-bottom: 0.05rem;
      color: var(--moodle-alt-darker);
    `;

  const CorrectWeight = `
      color: var(--correct);
      background-color: var(--correct-light);
    `;

  return weight
    ? `<span style="${Container} ${
        correct ? `${CorrectWeight}` : ``
      }">${weight}%</span>`
    : ``;
}

function AnswerFeedback(options: AnswerFeedbackOptions): string {
  const { feedback } = options;

  const Container = `
      color: var(--moodle-blue-darkest);
    `;

  return feedback
    ? `<span style="${Container}">${TextType({ text: feedback })}</span>`
    : ``;
}
