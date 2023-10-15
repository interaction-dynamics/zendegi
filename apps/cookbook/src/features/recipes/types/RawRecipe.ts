import { Recipe } from './Recipe'

export interface RawRecipe extends Omit<Recipe, 'ingredients' | 'steps'> {
  ingredients: string
  steps: string
}
