'use client'
import i18n, { createInstance } from 'i18next'
import cookieCutter from 'cookie-cutter'

import acceptLanguage from 'accept-language'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { settings, cookieName, fallbackLng } from './settings'

export const getClientSideLanguage = () => {
  return (
    cookieCutter.get(cookieName) ??
    document.getElementsByTagName('html')[0].getAttribute('lang') ??
    fallbackLng
  )
}

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...settings,
    lng: getClientSideLanguage(),
  })

i18n.on('languageChanged', lng => {
  cookieCutter.set(cookieName, lng)
})

interface Options {
  keyPrefix?: string
}

export * from './settings'
