import ListOfApps from '@/features/portal/ListOfApps'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'
import { useTranslation } from '@/services/i18n/serverSide'
import { Test } from './Test'

const GlobalPortal = async () => {
  const { t } = await useTranslation()

  return (
    <div className="fixed min-h-full w-full flex flex-col items-center justify-center bg-primary-500 p-5">
      <header className="w-full flex justify-end">
        <LanguageSwitcher />
      </header>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Zendegi
        </h1>
        {t('_language')}
        <Test />
        <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
          The apps you need to enjoy life with your loved ones.
        </p>
        <ListOfApps />
      </div>
    </div>
  )
}

export default GlobalPortal
