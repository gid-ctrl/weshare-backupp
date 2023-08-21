"use client"

import {signOut} from "next-auth/react"

export default function Logged() {
    return(
        <li className="flex gap-8 items-center">
                <button onClick={() => signOut()} className="bg-gray-700 text-white text-sm py-2 px-6 rounded-xl">
                    Sign out
                </button>
        </li>
    )
}