"use client"
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AddPost from "./components/posts"

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <AddPost/>
    </main>
  )
}
