import type { Task } from "./Task";


export type TaskWithContent = Task & {
  description: string;
  template: string;
  solution: string;
  templateLang: string;
  solutionLang: string;
}