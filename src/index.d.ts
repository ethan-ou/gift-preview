export type Template = (options: TemplateOptions) => string;

export interface TemplateOptions {
  data?: TemplateData;
  children?: Template | string;
}

export interface TemplateData {
  [key: string]: any;
}
