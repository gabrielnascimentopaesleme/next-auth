import Link from 'next/link'
import React from 'react'

type Props = {}

export default function credentials() {
  return (
    <div>
      <Link href={'/api/auth/signin'}>Login com credenciais</Link>
    </div>
  )
}