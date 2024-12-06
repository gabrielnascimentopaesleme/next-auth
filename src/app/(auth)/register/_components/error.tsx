'use client';

import Link from 'next/link';

export default function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: string;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h2 className="text-red-500 text-xl font-bold mb-4">
          {errorMessage}
        </h2>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Tentar novamente
        </button>
        <div className="mt-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-gray-100 font-medium"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
