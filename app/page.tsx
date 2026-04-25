// sources: https://authjs.dev/getting-started/authentication/oauth

import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"

// main page with the oauth login
export default async function Home() {
    const session = await auth()

    // if already logged in, redirect to profile page
    if (session) redirect("/profile")

    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-gray-500">Sign in to continue</p>

            {/* button to sign in with GitHub */}
            <form
                action={async () => {
                "use server"
                await signIn("github", { redirectTo: "/profile" })
            }}>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-lg w-48">
                    Sign in with GitHub
                </button>
            </form>

            {/* button to sign in with Google */}
            <form
                action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/profile" })
            }}>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg w-48">
                    Sign in with Google
                </button>
            </form>
        </main>
    )
}