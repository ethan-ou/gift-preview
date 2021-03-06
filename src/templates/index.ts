import Category from "./Category";
import Description from "./Description";
import Essay from "./Essay";
import Matching from "./Matching";
import MultipleChoice from "./MultipleChoice";
import Numerical from "./Numerical";
import ShortAnswer from "./ShortAnswer";
import TrueFalse from "./TrueFalse";
import {
  GIFTQuestion,
  Category as CategoryType,
  Description as DescriptionType,
  MultipleChoice as MultipleChoiceType,
  Numerical as NumericalType,
  ShortAnswer as ShortAnswerType,
  Essay as EssayType,
  TrueFalse as TrueFalseType,
  Matching as MatchingType,
} from "./types";

export default function Template(question: GIFTQuestion): string {
  const { type, ...keys } = question;
  switch (type) {
    case "Category":
      return Category({ ...(keys as CategoryType) });
    case "Description":
      return Description({ ...(keys as DescriptionType) });
    case "MC":
      return MultipleChoice({ ...(keys as MultipleChoiceType) });
    case "Numerical":
      return Numerical({ ...(keys as NumericalType) });
    case "Short":
      return ShortAnswer({ ...(keys as ShortAnswerType) });
    case "Essay":
      return Essay({ ...(keys as EssayType) });
    case "TF":
      return TrueFalse({ ...(keys as TrueFalseType) });
    case "Matching":
      return Matching({ ...(keys as MatchingType) });
    default:
      return ``;
  }
}

export {
  Category,
  Description,
  Essay,
  Matching,
  MultipleChoice,
  Numerical,
  ShortAnswer,
  TrueFalse,
};
