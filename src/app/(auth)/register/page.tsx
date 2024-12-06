import React from 'react';
import RegisterForm from './_components/registro';
import { auth } from 'auth';
import { redirect } from 'next/navigation';

export default function Register() {
  return <RegisterForm />;
}
