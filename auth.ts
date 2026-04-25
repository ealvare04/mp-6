import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub, Google],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.provider = account.provider
            }
            return token
        },
        async session({ session, token }) {
            session.provider = token.provider as string
            return session
        },
    },
})

// fixes type error in session.provider (line 15)
declare module "next-auth" {
    interface Session {
        provider?: string
    }
}