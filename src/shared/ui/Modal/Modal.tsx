'use client'

import React, { createContext, useContext, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'

// Контекст для управления модальным окном
const ModalContext = createContext<{ close: () => void } | undefined>(undefined)

const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal должен использоваться внутри Modal')
  }
  return context
}

export type ModalProps = {
  children: React.ReactNode
  trigger?: (open: () => void) => React.ReactNode
}

export type ModalCompound = React.FC<ModalProps> & {
  Header: React.FC<{ children: React.ReactNode }>
  Body: React.FC<{ children: React.ReactNode }>
  Footer: React.FC<{ children: React.ReactNode }>
  CloseButton: React.FC
}

const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DialogHeader>
    <DialogTitle>{children}</DialogTitle>
  </DialogHeader>
)

const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
)

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DialogFooter>{children}</DialogFooter>
)

const ModalCloseButton: React.FC = () => {
  const { close } = useModal()
  return (
    <DialogClose asChild>
      <Button variant="outline" onClick={close}>
        Закрыть
      </Button>
    </DialogClose>
  )
}

const Modal: ModalCompound = (({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <DialogTrigger asChild>{trigger(open)}</DialogTrigger>}
      <ModalContext.Provider value={{ close }}>
        <DialogContent>{children}</DialogContent>
      </ModalContext.Provider>
    </Dialog>
  )
}) as ModalCompound

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.CloseButton = ModalCloseButton

export default Modal
