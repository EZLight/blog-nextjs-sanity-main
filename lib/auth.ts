import {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { db } from './db';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcrypt';



export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                username: {
                    label: "Username",
                    type: "username"
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
                 async authorize(credentials){
                    if(!credentials?.email || !credentials?.password){
                    return null
                 }

                    const existingUser = await db.user.findUnique({
                        where: {email: credentials?.email}
                    })
                    if(!existingUser){
                        return null
                    }
                    const passwordMatch = await compare(credentials.password, existingUser.password)
                    if(!passwordMatch){
                        return null
                    }

                    return {
                      id: existingUser.id + '',
                      username: existingUser.username,
                      email:  existingUser.email
                    }
 
                }, 
            }),
            GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        
        })
    ],

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
     debug: process.env.NODE_ENV === 'development',
        
}


export default authOptions