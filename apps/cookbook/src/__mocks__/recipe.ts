import { Recipe } from '@/features/recipes/types/Recipe'

const recipe: Recipe = {
  id: '1',
  slug: 'cookies-1',
  name: 'Cookies',
  ingredients: [
    {
      name: '',
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
      name: '',
      steps: [
        { description: 'step 1', ingredients: [] },
        { description: 'step 2', ingredients: [] },
        { description: 'step 3', ingredients: [] },
      ],
    },
  ],
  imageUrl: 'https://test.com/test.jpg',
  keywords: ['1', '2'],
  createdAt: new Date(),
  stats: {},
}

export default recipe
