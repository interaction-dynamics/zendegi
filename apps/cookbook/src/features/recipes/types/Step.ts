import Ingredient from '@/features/ingredients/types/Ingredient'

export default interface Step {
  description: string
  ingredients: Ingredient[]
  timers: number[]
}
