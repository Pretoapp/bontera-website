'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center px-6">
        <div className="w-16 h-1 bg-red-600 mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}