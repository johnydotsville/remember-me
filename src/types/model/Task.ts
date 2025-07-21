import type { TaskDescriptor } from "./TaskDescriptor";

export type Task = {
  id: string;
  name: string;
  path: string;
  title: string;
  description: string;
  template: string;
  solution: string;
  templateLang: string;
  solutionLang: string;
  categories: string[];
  tags: string[];
  descriptor?: TaskDescriptor;
}