import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export enum PopupType {
  Warning,
  Info,
  Success,
  Black,
}

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const colors = {
  [PopupType.Warning]: 'red',
  [PopupType.Black]: 'gray',
  [PopupType.Info]: 'primary',
  [PopupType.Success]: 'green',
}

function Modal({ open, onClose, children }: ModalProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center md:p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-sm sm:p-6">
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

Modal.Icon = function ModalIcon({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${className}`}
    >
      {children}
    </div>
  )
}

Modal.Title = function ModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Title
      as="h3"
      className="text-center mt-1 text-lg md:text-xl font-medium md:font-semibold leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  )
}

Modal.Description = function ModalDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-3 text-center">
      <div className="text-sm text-gray-500">{children}</div>
    </div>
  )
}

Modal.Content = function ModalContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="mt-5">{children}</div>
}

export default Modal
