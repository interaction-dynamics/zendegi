import Measure from '../../recipes/types/Measure'

export default interface Ingredient {
  name: string
  measure: Measure
  rawText?: string
}

export const buildIngredient = (
  name: string,
  value: string | number,
  unit: string,
): Ingredient => ({
  name,
  measure: {
    unit,
    value,
  },
})

export const areEqual = (ingredientA: Ingredient, ingredientB: Ingredient) =>
  ingredientA.name === ingredientB.name &&
  ingredientA.measure.value === ingredientB.measure.value &&
  ingredientA.measure.unit === ingredientB.measure.unit
