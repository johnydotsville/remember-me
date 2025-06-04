import type { Category } from '@/data/tasks';


export function flatcats(cat: Category) {
  const catnames: string[] = [];
  if (cat.title != '') catnames.push(cat.title)
  else catnames.push(cat.name);

  cat.subcategories.forEach(s => catnames.push(...flatcats(s)));

  return catnames;
}