import { UserCreateModal } from '@/widgets/UserCreateModal/UserCreateModal'

export default function Home() {
  const test = { a: 1, b: 2 }
  console.log(test)

  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserCreateModal />
    </div>
  )
}
