import Link from 'next/link';
import React from 'react';

type Props = {};

export default function credentials() {
  return (
    <div>
      <Link href={'/login'}>Login com credenciais</Link>
    </div>
  );
}
