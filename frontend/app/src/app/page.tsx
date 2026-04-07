'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/select-role'); // Redirect to role selection
  }, [router]);

  return (
    // Optionally show a loading indicator or nothing while redirecting
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-700">Redirecting to role selection...</p>
    </div>
  );
}
