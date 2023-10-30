import Card from '@/components/atoms/Card'
import ImageBanner from '@/components/atoms/ImageBanner'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import Paddings from '@/components/atoms/Paddings'
import IngredientList from './IngredientList'

import recipe from '@/__mocks__/recipe'
import user from '@/__mocks__/user'
import StepList from './StepList'
import Footer from '@/components/organisms/Footer'
import FixedHeader from '@/components/molecules/FixedHeader'
import Badge from '@/components/atoms/Badge'
import KeywordList from './KeywordList'

export interface RecipeViewPageProps {
  params: {
    locale: string
  }
}

export default function RecipeViewPage({ params }: RecipeViewPageProps) {
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
              <div className="relative py-4 lg:py-10">
                <FixedHeader>
                  <Card.Title>{recipe.name}</Card.Title>
                  <div className="text-sm font-medium text-gray-600">
                    by {user.name}
                  </div>
                </FixedHeader>
                <Card.Section className="py-0 lg:py-0 pt-2 lg:pt-2">
                  <KeywordList keywords={recipe.keywords} />
                </Card.Section>
                <Card.Section>
                  <IngredientList recipe={recipe} />
                </Card.Section>
                <Card.Section>
                  <StepList recipe={recipe} />
                </Card.Section>
              </div>
            </Card>
            <Footer locale={params.locale} />
          </div>
        </MaxWidthContainer>
      </Paddings>
    </div>
  )
}
