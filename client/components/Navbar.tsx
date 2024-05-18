import { SignedIn, UserButton } from '@clerk/nextjs';

import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <SignedIn>
                <UserButton afterSignOutUrl="/sign-in"/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar