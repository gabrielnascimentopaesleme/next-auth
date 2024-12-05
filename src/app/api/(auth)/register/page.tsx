import React from 'react';
import RegisterForm from './_components/registro';
import { auth } from 'auth';
import { redirect } from 'next/navigation';


export default async function Register() {
  const session = await auth();
  if (!session?.user) {
    console.log('olá')
    return <RegisterForm /> 
  }
  return <RegisterForm />;
};


