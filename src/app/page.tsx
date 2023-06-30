import ListOfApps from '@/features/portal/ListOfApps'

const GlobalPortal = () => {
  return (
    <div className='fixed min-h-full w-full flex flex-col items-center justify-center bg-primary-500 p-5'>
      <h1 className='mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
        Zendegi
      </h1>
      <p className='mt-6 text-lg leading-8 text-gray-300 text-center'>
        The apps you need to enjoy life with your loved ones.
      </p>
      <ListOfApps />
    </div>
  )
}

export default GlobalPortal
