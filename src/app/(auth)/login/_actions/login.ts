'use server'

import { signIn } from "auth";

export default async function login(FormData: FormData){
  const entries = Array.from(FormData.entries());
  const {email, password} = Object.fromEntries(entries) as {
    email: string
    password: string 
  }
  console.log(email, password)

  await signIn('credentials', {email, password})
}