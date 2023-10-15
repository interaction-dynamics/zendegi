import { useMemo } from 'react'
import Temperature from '@/features/recipes/types/Temperature'
import convertTemperature from '@/features/recipes/utils/convertTemperature'
import replaceUrlsByLinks from '@/utils/replaceUrlsByLinks'

export interface RecipeDescriptionPrettierProps {
  description: string
}

export default function RecipeDescriptionPrettier({
  description,
}: RecipeDescriptionPrettierProps) {
  const temperature = Temperature.Farenheit

  const descriptionParsed = useMemo(
    () =>
      typeof description === 'string'
        ? convertTemperature(
            replaceUrlsByLinks(unescape(description), 'underline'),
            temperature,
          )
        : '',
    [description, temperature],
  )

  return <div dangerouslySetInnerHTML={{ __html: descriptionParsed }} />
}
