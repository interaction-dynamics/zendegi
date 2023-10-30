import { Recipe } from '@/features/recipes/types/Recipe'

const recipe: Recipe = {
  id: '1',
  slug: 'cookies-1',
  name: 'Cookies',
  ingredients: [
    {
      name: 'pizza dough',
      ingredients: [
        {
          name: 'sugar',
          measure: { value: 10, unit: 'g' },
          rawText: '10g of sugar',
        },
        {
          name: 'flour',
          measure: { value: 20, unit: 'g' },
          rawText: '20g of flour',
        },
      ],
    },
    {
      name: 'pizza ingredients',
      ingredients: [
        {
          name: 'sugar',
          measure: { value: 10, unit: 'g' },
          rawText: '10g of sugar',
        },
        {
          name: 'flour',
          measure: { value: 20, unit: 'g' },
          rawText: '20g of flour',
        },
      ],
    },
  ],
  steps: [
    {
      name: 'Pizza dough',
      steps: [
        {
          description: 'step 1',
          ingredients: [
            {
              name: 'foo',
              measure: { value: 10, unit: 'g' },
              rawText: '10g of foo',
            },
          ],
          timers: [],
        },
        { description: 'step 2', ingredients: [], timers: [] },
        { description: 'step 3', ingredients: [], timers: [] },
      ],
    },
    {
      name: 'Pizza',
      steps: [
        { description: 'step 1', ingredients: [], timers: [] },
        { description: 'step 2', ingredients: [], timers: [] },
        { description: 'step 3', ingredients: [], timers: [] },
        { description: 'step 4', ingredients: [], timers: [] },
        { description: 'step 5', ingredients: [], timers: [] },
        { description: 'step 6', ingredients: [], timers: [] },
        { description: 'step 7', ingredients: [], timers: [] },
        { description: 'step 8', ingredients: [], timers: [] },
        { description: 'step 9', ingredients: [], timers: [] },
        { description: 'step 10', ingredients: [], timers: [] },
        { description: 'step 11', ingredients: [], timers: [] },
        { description: 'step 12', ingredients: [], timers: [] },
      ],
    },
  ],
  imageUrl: 'https://test.com/test.jpg',
  keywords: ['foo', 'bar', 'baz'],
  createdAt: new Date(),
  stats: {},
  originUrl:
    'https://www.5ingredients15minutes.com/recettes/plats-principaux/poulet/dinde-traditionnelle-au-beurre-aromatise/',
}

export default recipe
