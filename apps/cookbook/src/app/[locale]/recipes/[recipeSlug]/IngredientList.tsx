'use client'
import { useState } from 'react'
import { ShoppingCartIcon, XCircleIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import Section from '@/components/molecules/Section'
import Ingredient from '@/features/ingredients/types/Ingredient'
import { Recipe } from '@/features/recipes/types/Recipe'

export interface IngredientListProps {
  recipe: Recipe
}

export default function IngredientList({ recipe }: IngredientListProps) {
  const t = useTranslations('Recipes')

  const [selectable, setSelectable] = useState(false)

  const [selectedIndexes, setSelectedIndexes] = useState<
    { index: number; subIndex: number }[]
  >([])

  return (
    <Section>
      <Section.Title title={t('ingredients')}>
        <Section.Action
          label={'Select'}
          icon={
            <div className="flex items-center gap-2">
              {selectable ? (
                <XCircleIcon className="w-7 h-7" />
              ) : (
                <ShoppingCartIcon className="w-7 h-7" />
              )}
            </div>
          }
          onClick={() => {
            setSelectedIndexes(
              recipe.ingredients.flatMap((ingredientGroup, index) =>
                ingredientGroup.ingredients.map((ingredient, subIndex) => ({
                  index,
                  subIndex,
                })),
              ),
            )
            setSelectable(!selectable)
          }}
        />
      </Section.Title>
      <div className="flex flex-col gap-4">
        {recipe.ingredients.map((ingredientGroup, index) => (
          <div key={ingredientGroup.name}>
            {ingredientGroup.name && (
              <Section.SubTitle title={ingredientGroup.name} />
            )}
            <div className="list-disc ps-4">
              {ingredientGroup.ingredients.map(
                (ingredient: Ingredient, subIndex) => (
                  <label
                    key={ingredient.name}
                    className={classNames(
                      'flex items-center text-gray-500 font-normal text-sm py-1',
                      selectable ? 'cursor-pointer' : '',
                    )}
                  >
                    <div className="w-4 flex justify-center me-3">
                      {selectable ? (
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          className="relative h-4 w-4 rounded border-gray-300 text-primary-400 focus:ring-primary-400 cursor-pointer"
                          checked={selectedIndexes.some(
                            i => i.index === index && i.subIndex === subIndex,
                          )}
                          onChange={event => {
                            console.log('onChange', event.target.checked)
                            const newIndexes = event.target.checked
                              ? [...selectedIndexes, { index, subIndex }]
                              : selectedIndexes.filter(
                                  i =>
                                    i.index !== index ||
                                    i.subIndex !== subIndex,
                                )

                            setSelectedIndexes(newIndexes)
                          }}
                        />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      )}
                    </div>

                    <div>{ingredient.rawText}</div>
                  </label>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
