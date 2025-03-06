'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '../model/userSchema'
import type { z } from 'zod'
import { Button } from '@/shared/ui/button'

export type UserFormData = z.infer<typeof userSchema>

type CreateUserFormProps = {
  onSubmit: (data: UserFormData) => void
}

export const CreateUserForm: React.FC<CreateUserFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
          Имя
        </label>
        <input
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded border p-2"
          placeholder="Укажите ваше имя"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1 block w-full rounded border p-2"
          placeholder="Укажите ваш email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block font-medium">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="mt-1 block w-full rounded border p-2"
          placeholder="Укажите пароль"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit">Создать пользователя</Button>
    </form>
  )
}
