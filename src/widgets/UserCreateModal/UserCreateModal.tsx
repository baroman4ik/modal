'use client'

import React from 'react'
import {
  CreateUserForm,
  UserFormData,
} from '@/features/UserCreation/ui/CreateUserForm'
import ModalWindow from '@/shared/ui/Modal/Modal'
import { Button } from '@/shared/ui/button'

export const UserCreateModal: React.FC = () => {
  const handleCreateUser = (data: UserFormData) => {
    console.log(data)
  }

  return (
    <ModalWindow trigger={(open) => <Button onClick={open}>Open Modal</Button>}>
      <ModalWindow.Header>Создание юзера</ModalWindow.Header>
      <ModalWindow.Body>
        <CreateUserForm onSubmit={handleCreateUser} />
      </ModalWindow.Body>
    </ModalWindow>
  )
}
