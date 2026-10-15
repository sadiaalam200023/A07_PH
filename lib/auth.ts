
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing from environment variables");
}

const client = new MongoClient(uri);
const db = client.db("bazardor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(db, {
    client,
  }),
   trustedOrigins: [
    "http://localhost:3000",
    "https://YOUR-PROJECT.vercel.app",
  ],

  emailAndPassword: {
    enabled: true, autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string 
},
github: {
  clientId: process.env.GIT_CLIENT_ID as string,
      clientSecret: process.env.GIT_CLIENT_SECRET as string 
}
  }
});
