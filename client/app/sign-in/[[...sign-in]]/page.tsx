import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <main className="bg-headerBG flex h-screen w-full justify-center items-center">
            <SignIn />
        </main>
    )
}