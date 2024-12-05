import React from 'react';
import LoginForm from './_components/login';

export default async function Login(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return <LoginForm />;
}
