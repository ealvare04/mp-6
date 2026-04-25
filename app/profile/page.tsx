import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

// The profile's information shown after a successful login
export default async function Profile() {
    const session = await auth()

    // redirect to login page if there is no active session
    if (!session) redirect("/")

    // pass user from session
    const { user } = session
    console.log("THIS IS THE SESSION", session)

    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-4">
            {/* session can be null, so need to use `user?` */}
            {user?.image && (
                <Image
                    src={user.image}
                    alt="Profile picture"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
            )}

            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>

            <p className="text-sm text-gray-400">
                Signed in with {session?.provider}
            </p>

            {/* sign out button */}
            <form
                action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
            }}>
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg mt-4">
                    Sign out
                </button>
            </form>

            <p className="text-sm text-gray-400">
                Token expires {session?.expires}
            </p>
        </main>
    )
}