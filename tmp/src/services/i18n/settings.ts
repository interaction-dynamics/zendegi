export const fallbackLng = 'en'
export const languages = [fallbackLng, 'fr']
export const defaultNS = 'default'

export const cookieName = 'i18next'

export const settings = {
  resources: {
    en: {
      default: {
        _language: 'Language',
      },
    },
    fr: {
      default: {
        _language: 'Langue',
      },
    },
  },
  // debug: true,
  supportedLngs: languages,
  fallbackLng,
  lng: fallbackLng,
  fallbackNS: defaultNS,
  defaultNS: 'default',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
}

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
