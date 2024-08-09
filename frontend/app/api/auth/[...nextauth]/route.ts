import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

// add the providers here 
//signup and singin using google

//create a client_id and secret from GCP  from oauth2.0
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
});

export {handler as GET ,handler as POST};
