"use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import * as Navigation from '../styles/styles'

const SignInButton = () => {

    const {data: session} = useSession()

    if(session && session.user) {
        return (
            <div>
                <p>{session.user.name}</p>
                <button onClick={() => signOut()} className={Navigation.RegisterButtonDT}>Sign Out</button>
            </div>
        )
    }

    return <button onClick={() => signIn()} className={Navigation.RegisterButtonDT}>SignIn</button>

}

export default SignInButton