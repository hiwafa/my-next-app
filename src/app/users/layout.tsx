"use client"
import Link from "next/link"
import type { Metadata } from "next"
import { usePathname } from "next/navigation"
import { useState } from "react"

// we can not use meta data with USE CLIENT
// export const metadata: Metadata = {
//     title: "Users Page",
//     description: "This is the user page"
// }


export default function UsersLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {

    const pathname = usePathname();
    console.log("Paths: ", pathname);

    const [name, setName] = useState();

    const handleUserText = event => {
        setName(event.target.value)
    }

    return (
        <div>
            <input type="text" name="usr" value={name} onChange={handleUserText} /> - {name} <br />
            <nav className="flex space-x-3">
                <Link href="/users/user1" className={pathname.startsWith('/users/user1') ? 'font-bold text-blue-500' : ''}>First User</Link>
                <Link href="/users/user2" className={pathname.startsWith('/users/user2') ? 'font-bold text-blue-500' : ''}>Second User</Link>
                <Link href="/users/user3" className={pathname.startsWith('/users/user3') ? 'font-bold text-blue-500' : ''}>Third User</Link>
            </nav>
            {children}
        </div>
    )
}