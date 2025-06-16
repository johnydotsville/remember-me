export interface Category {
  name: string,
  title: string,
  hidden: boolean,
  subcategories: Category[]
}