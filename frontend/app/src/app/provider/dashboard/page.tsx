'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';

const ProviderDashboard = () => {
  const router = useRouter();
  const userRole = useAuthStore((state) => state.userRole);

  // Redirect if no role is selected or if the role doesn't match
  useEffect(() => {
    if (!userRole) {
      router.replace('/select-role');
    } else if (userRole === 'patient') {
      router.replace('/patient/dashboard'); // Redirect patient trying to access provider dashboard
    }
  }, [userRole, router]);

  // Prevent rendering if unauthorized, show loading or similar
  if (userRole !== 'provider') {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome, Provider!</h1>
      <p className="text-lg text-gray-700">This is your provider dashboard.</p>
      {/* Future provider-specific content will go here */}
    </div>
  );
};

export default ProviderDashboard;
