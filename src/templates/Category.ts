import { TemplateOptions, Category } from "./types";
import QuestionContainer from "./QuestionContainer";
import Title from "./Title";

type CategoryOptions = TemplateOptions & Category;

export default function Category(options: CategoryOptions): string {
  const { title } = options;
  return `${QuestionContainer({
    children: Title({
      type: "Category",
      title: title,
    }),
  })}`;
}
