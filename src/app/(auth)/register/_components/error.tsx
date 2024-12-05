'use client';

import Link from 'next/link';

export default function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: String;
  reset: () => void;
}) {
  return (
    <>
      <h2>{errorMessage}</h2>
      <button onClick={reset}>
            Tentar novamente
          </button>
      <Link
        className={('mt-8')}
        href="/"
      >
        Voltar para Home
      </Link>
    </>
  );
}
