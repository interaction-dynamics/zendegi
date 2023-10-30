import Card from '@/components/atoms/Card'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import Paddings from '@/components/atoms/Paddings'

export default function TermsOfUseViewPage() {
  return (
    <Paddings>
      <MaxWidthContainer>
        <div className="pt-10">
          <Card>
            <Card.Section>
              <Card.Title>Terms of use</Card.Title>
            </Card.Section>
          </Card>
        </div>
      </MaxWidthContainer>
    </Paddings>
  )
}
