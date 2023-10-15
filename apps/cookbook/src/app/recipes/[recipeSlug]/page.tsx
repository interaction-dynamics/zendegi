import Card from '@/components/atoms/Card'
import ImageBanner from '@/components/atoms/ImageBanner'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import Paddings from '@/components/atoms/Paddings'
import Section from '@/components/molecules/Section'
import IngredientList from './IngredientList'

import recipe from '@/__mocks__/recipe'
import user from '@/__mocks__/user'
import StepList from './StepList'

export default function RecipeViewPage() {
  return (
    <div>
      <ImageBanner
        alt="cookies"
        imageUrl="https://plus.unsplash.com/premium_photo-1675435646468-5c3b3e550331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />
      <Paddings>
        <MaxWidthContainer>
          <div className="relative top-[-7rem]">
            <Card>
              <div className="pb-5">
                <h1 className="text-2xl sm:text-4xl font-bold leading-7 text-gray-900 break-words overflow-hidden pb-1.5 select-text">
                  {recipe.name}
                </h1>
                <div className="text-md font-medium text-gray-600">
                  by {user.name}
                </div>
              </div>
              <IngredientList recipe={recipe} />
              <StepList recipe={recipe} />
            </Card>
          </div>
        </MaxWidthContainer>
      </Paddings>
    </div>
  )
}
