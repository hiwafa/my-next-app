import Link from "next/link"
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "Users Page",
    description: "This is the user page"
}


export default function UsersLayout({children}: Readonly<{
    children: React.ReactNode
}>){

    return (
        <div>
            <nav className="flex space-x-3">
            <Link href="/users/user1">First User</Link>
            <Link href="/users/user2">Second User</Link>
            <Link href="/users/user3">Third User</Link>
            </nav>
            {children}
        </div>
    )
}