'use client'
import { getClientSideLanguage } from '@/services/i18n'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function Test() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(getClientSideLanguage())
  })

  return <>{t('_language')}</>
}
