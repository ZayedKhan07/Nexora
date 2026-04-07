'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';

const PatientDashboard = () => {
  const router = useRouter();
  const userRole = useAuthStore((state) => state.userRole);

  // Redirect if no role is selected or if the role doesn't match
  useEffect(() => {
    if (!userRole) {
      router.replace('/select-role');
    } else if (userRole === 'provider') {
      router.replace('/provider/dashboard'); // Redirect provider trying to access patient dashboard
    }
  }, [userRole, router]);

  // Prevent rendering if unauthorized, show loading or similar
  if (userRole !== 'patient') {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome, Patient!</h1>
      <p className="text-lg text-gray-700">This is your patient dashboard.</p>
      {/* Future patient-specific content will go here */}
    </div>
  );
};

export default PatientDashboard;
