/* eslint-disable i18next/no-literal-string */
import { useNavigate } from 'react-router-dom'
import MaxWidthContainer from '~/src/components/atoms/MaxWidthContainer'
import AppButton from '~src/features/portal/components/AppButton'

const apps = [
  {
    title: 'Events',
    url: '/event',
    iconUrl: '/icons/wired-outline-2237-champagne-flutes.json',
  },
]

const GlobalPortal = () => {
  const navigate = useNavigate()

  // eslint-disable-next-line i18next/no-literal-string
  return (
    <div className="fixed min-h-full w-full flex flex-col items-center justify-center bg-primary-500 p-5">
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Zendegi
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
        All the apps you need to enjoy life with your loved ones.
      </p>
      <div className="py-5 flex items-center justify-center pt-7 ">
        {apps.map(app => (
          <AppButton
            key={app.title}
            onClick={() => navigate(app.url)}
            {...app}
          />
        ))}
      </div>
    </div>
  )
}

export default GlobalPortal
