import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    // will request this during the build -> this is a static website
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log('Hello')

    // map over what we expect to receive
    const content = (
      <section>
        <h2>
          <Link href="/"> Back to Home </Link>
        </h2>
        <br />
        {users.map(user => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}> {user.name} </Link>
              </p>
              <br />
            </>
          )
        })}
      </section>
    )

  return content
}

