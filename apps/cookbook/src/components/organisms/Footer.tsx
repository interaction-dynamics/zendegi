'use client'
import usePopup from '@/hooks/usePopup'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Modal from '../atoms/Modal'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Button from '../atoms/Button'

const languages = [
  { label: 'English', locale: 'en' },
  { label: 'Français', locale: 'fr' },
]

export interface FooterProps {
  locale: string
}

export default function Footer({ locale: currentLocale }: FooterProps) {
  const languageSelectorModal = usePopup()
  const pathname = usePathname()

  return (
    <footer className="flex items-center pt-5 gap-5">
      <div className="text-xs text-gray-500">Copyright © 2023 Zendegi</div>
      <div className="text-xs text-gray-600 flex items-center gap-2">
        <Link href="/terms-of-use" className="hover:underline">
          Terms of use
        </Link>
        |
        <Link href="/legal" className="hover:underline">
          Legal
        </Link>
      </div>
      <div className="flex-1" />
      <button
        className="text-xs text-gray-600 hover:underline"
        onClick={languageSelectorModal.open}
      >
        {languages.find(({ locale }) => locale === currentLocale)?.label}
      </button>
      <Modal
        open={languageSelectorModal.isOpen}
        onClose={languageSelectorModal.close}
      >
        <Modal.Icon className="bg-cyan-100">
          <GlobeAltIcon className="w-8 h-8 text-cyan-600" />
        </Modal.Icon>
        <Modal.Title>Change Language</Modal.Title>
        <Modal.Description>
          It will only change the UI but not the content of the recipes.
        </Modal.Description>
        <Modal.Content>
          <div className="flex flex-col items-stretch gap-2">
            {languages.map(({ label, locale }) => (
              <Link
                href={`/${locale}/${pathname.replace(/^\/[a-z]+/, '')}`}
                key={locale}
                className="flex flex-col items-stretch justify-stretch"
              >
                <Button>{label}</Button>
              </Link>
            ))}
          </div>
        </Modal.Content>
      </Modal>
    </footer>
  )
}
