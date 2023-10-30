import Badge from '@/components/atoms/Badge'
import Ingredient from '../types/Ingredient'

export interface IngredientBadgeProps {
  ingredient: Ingredient
}

export default function IngredientBadge({ ingredient }: IngredientBadgeProps) {
  return (
    <Badge className="bg-indigo-100 text-indigo-800">
      {ingredient.rawText}
    </Badge>
  )
}
