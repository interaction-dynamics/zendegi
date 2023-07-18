'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

import { languages } from '@/services/i18n'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <GlobeAltIcon className="h-6 w-6 text-white" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map(language => (
            <Menu.Item key={language}>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                  onClick={() => i18n.changeLanguage(language)}
                >
                  {language}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSwitcher
