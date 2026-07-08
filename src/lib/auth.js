import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first")


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Book Haven");


export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

  emailAndPassword: {
    enabled: true,
  },

  // Login with Google
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
