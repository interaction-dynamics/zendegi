import IngredientGroup from '../../ingredients/types/IngredientGroup'
import Measure from './Measure'
import Step from './Step'

interface GroupOfSteps {
  name: string
  steps: Step[]
}

export interface Recipe {
  id: string
  slug: string
  name: string
  keywords: string[]
  imageUrl: string
  stats: { [id: string]: Measure }
  ingredients: IngredientGroup[]
  steps: GroupOfSteps[]
  createdAt: Date | null
  updatedAt?: Date | null
  originUrl?: string
  authorId?: string
}
