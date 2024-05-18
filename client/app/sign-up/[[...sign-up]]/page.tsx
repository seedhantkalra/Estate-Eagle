import { SignUp } from "@clerk/nextjs"

export default function SignUpPage () {
    return (
        <main className = "flex w-full h-screen justify-center items-center">
            <SignUp/>
        </main>
    )
}