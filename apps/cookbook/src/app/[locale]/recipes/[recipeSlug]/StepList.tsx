'use client'
import type { Recipe } from '@/features/recipes/types/Recipe'
import Section from '@/components/molecules/Section'
import StepItem from '@/components/molecules/StepItem'
import RecipeDescriptionPrettier from '@/components/organisms/RecipeDescriptionPrettier'
import Toggle from '@/components/atoms/Toggle'
import Badge from '@/components/atoms/Badge'
import IngredientBadge from '@/features/ingredients/components/IngredientBadge'

export interface StepListProps {
  recipe: Recipe
}

const isNotLastOne = <T,>(index: number, array: Array<T>, recipe: Recipe) =>
  index !== array.length - 1 || recipe.originUrl

export default function StepList({ recipe }: StepListProps) {
  return (
    <Section>
      <Section.Title title="Steps">
        <Section.Action
          label={'Cooking mode'}
          icon={<Toggle />}
          onClick={() => {}}
        />
      </Section.Title>
      <div className="flex flex-col gap-10">
        {recipe.steps.map(step => (
          <div key={step.name}>
            {step.name && <Section.SubTitle title={step.name} />}
            <ol className="overflow-hidden ps-2 pt-2">
              {step.steps.map((step, index, array) => (
                <StepItem
                  className={isNotLastOne(index, array, recipe) ? 'pb-10' : ''}
                  icon={<StepItem.RadioButton />}
                  key={step.description}
                  description={step.description}
                  line={
                    isNotLastOne(index, array, recipe) ? (
                      <StepItem.Line className="bg-gray-300" />
                    ) : null
                  }
                >
                  <div
                    className="flex flex-row flex-wrap gap-1 pt-1"
                    onClick={event => event.stopPropagation()}
                    onKeyDown={() => {}}
                    role="link"
                    tabIndex={0}
                  >
                    {step.ingredients.map(ingredient => (
                      <IngredientBadge
                        key={ingredient.name}
                        ingredient={ingredient}
                      />
                    ))}
                  </div>
                </StepItem>
              ))}
              {recipe.originUrl && (
                <StepItem
                  icon={<StepItem.RadioButton />}
                  description={
                    <RecipeDescriptionPrettier description={recipe.originUrl} />
                  }
                />
              )}
            </ol>
          </div>
        ))}
      </div>
      <div>
        <div></div>
      </div>
    </Section>
  )
}
