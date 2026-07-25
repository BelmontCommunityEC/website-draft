import { CATEGORIES } from './category-options';

const CHECKBOX_RE = /^\[(x|X| )\]\s+(.+)$/;

export interface CategorySource {
  categories?: readonly string[];
  categoryChecklist?: readonly string[];
}

export function categoriesFromChecklist(categoryChecklist?: readonly string[]): string[] {
  if (!categoryChecklist || categoryChecklist.length === 0) return [];

  const valid = new Set<string>(CATEGORIES);
  const selected: string[] = [];

  for (const item of categoryChecklist) {
    const match = CHECKBOX_RE.exec(item);
    if (!match) continue;
    const checked = match[1].toLowerCase() === 'x';
    const category = match[2].trim();
    if (checked && valid.has(category) && !selected.includes(category)) {
      selected.push(category);
    }
  }

  return selected;
}

export function resolveCategories(source: CategorySource): string[] {
  if (source.categories && source.categories.length > 0) {
    return [...source.categories];
  }
  return categoriesFromChecklist(source.categoryChecklist);
}
