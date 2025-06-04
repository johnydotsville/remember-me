import type { Category } from '@src/types/model/Category';


export function flatcats(category: Category): Category[] {
  const categories: Category[] = [];
  categories.push(category);

  category.subcategories.forEach(subcat => categories.push(...flatcats(subcat)));

  return categories;
}