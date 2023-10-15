import type { Recipe } from '@/features/recipes/types/Recipe'
import Section from '@/components/molecules/Section'
import StepItem from './StepItem'

export interface StepListProps {
  recipe: Recipe
}

const isNotLastOne = <T,>(index: number, array: Array<T>) =>
  index !== array.length - 1

export default function StepList({ recipe }: StepListProps) {
  return (
    <Section>
      <Section.Title title="Steps"></Section.Title>
      {recipe.steps.map(step => (
        <div key={step.name}>
          {step.name && (
            <div className="text-xl text-gray-900 font-medium">{step.name}</div>
          )}
          <ol className="overflow-hidden">
            {step.steps.map((step, index, array) => (
              <StepItem
                className={isNotLastOne(index, array) ? 'pb-10' : ''}
                icon={<StepItem.RadioButton />}
                key={step.description}
                description={step.description}
                line={
                  isNotLastOne(index, array) ? (
                    <StepItem.Line className="bg-gray-300" />
                  ) : null
                }
              />
            ))}
            {recipe.originUrl && <StepItem icon={<StepItem.RadioButton />} />}
          </ol>
        </div>
      ))}
      <div>
        <div></div>
      </div>
    </Section>
  )
}
