import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from "bcryptjs"
import User from '@/models/User'

const handler= NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
        id:"credentials",
        name:"Credentials",
        async authorize(credentials){
            await connect()

            try {
                const user =await User.findOne({email:credentials.email})


                if(user){
                    //check password
                    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)

                    if(isPasswordCorrect){
                        return user
                    }else {
                        throw new Error("wrong credentials")
                    }
                }else{
                    throw new Error("User not found")
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    })
    
  ]
})

export {handler as GET, handler as POST}