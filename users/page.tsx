import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"

export const metadata: Metadata = {
    title: 'Users',
}

export default function UsersPage() {
    // will request this during the build -> this is a static website
    const UsersData: Promise<User[]> = getAllUsers()
  return (
    <div>page</div>
  )
}
