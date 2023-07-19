import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'

const EventNotFound = () => {
  return (
    <MaxWidthContainer className="max-w-screen-2xl">
      <div className="mt-10 text-center">
        <h1 className="text-xl text-gray-900">Impossible to find this event</h1>
        <p className="text-gray-500 text-center">
          Maybe a typo in the url? Ask your contact
        </p>
      </div>
    </MaxWidthContainer>
  )
}

export default EventNotFound
