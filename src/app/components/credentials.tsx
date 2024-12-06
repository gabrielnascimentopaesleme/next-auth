import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Credentials() {
  return (
    <div>
      <Link href={'/login'}>Tela de Login</Link>
    </div>
  );
}
