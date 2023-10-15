'use client'
import { useState } from 'react'

import Section from '@/components/molecules/Section'
import Ingredient from '@/features/ingredients/types/Ingredient'
import { Recipe } from '@/features/recipes/types/Recipe'

export interface IngredientListProps {
  recipe: Recipe
}

export default function IngredientList({ recipe }: IngredientListProps) {
  const [selectable, setSelectable] = useState(false)

  return (
    <Section>
      <Section.Title title={'Ingredients'}></Section.Title>
      {recipe.ingredients.map(ingredientGroup => (
        <div key={ingredientGroup.name}>
          {ingredientGroup.name && (
            <h3 className="text-gray-900 font-semibold text-md">
              {ingredientGroup.name}
            </h3>
          )}
          <div className="list-disc ps-8">
            {ingredientGroup.ingredients.map((ingredient: Ingredient) => (
              <div
                key={ingredient.name}
                className="flex items-center text-gray-900 font-semibold text-md"
              >
                <div className="w-5 flex items-center justify-center pr-2">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
                <div>{ingredient.rawText}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
