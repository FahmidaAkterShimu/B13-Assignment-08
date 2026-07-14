// import dns from "node:dns";
// dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first")


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("BookHaven");


export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

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
