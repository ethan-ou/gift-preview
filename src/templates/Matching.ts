import { TemplateOptions, Match, Matching } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";
import TextType from "./TextType";
import GlobalFeedback from "./GlobalFeedback";

type MatchingOptions = TemplateOptions & Matching;

interface MatchAnswerOptions extends TemplateOptions {
  choices: Match[];
}

const Select = `
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  color: #495057;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: 0.6em;
  background-position: calc(100% - 0.5em) center;
  background-repeat: no-repeat;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: auto;
  vertical-align: baseline;
`;

export default function Matching(options: MatchingOptions): string {
  const { title, stem, matchPairs, globalFeedback } = options;
  return `${QuestionContainer({
    children: [
      Title({
        type: "Matching",
        title: title,
      }),
      `<p>${TextType({
        text: stem,
      })}</p>`,
      MatchAnswers({ choices: matchPairs }),
      GlobalFeedback({ feedback: globalFeedback }),
    ],
  })}`;
}

function MatchAnswers(options: MatchAnswerOptions): string {
  const { choices } = options;
  const uniqueMatchOptions = Array.from(
    new Set(choices.map((choice) => choice.subanswer))
  );

  const result = choices
    .map((choice) => {
      return `
        <tr>
          <td style="padding-right: 1rem">
            ${TextType({ text: choice.subquestion })} 
          </td>
          <td>
            <select style="${Select}">
            <option value="" disabled selected hidden>Choose...</option>
            ${uniqueMatchOptions
              .map((choice) => `<option>${choice}</option>`)
              .join("")}
            </select>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <table>
      <tbody>
        ${result}
      </tbody>
    </table>
  `;
}
