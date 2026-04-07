'use client';

import { useRouter } from 'next/navigation'; // Use useRouter hook from next/navigation
import { useAuthStore } from '@/lib/authStore';

const RoleSelectionPage = () => {
  const router = useRouter(); // Use useRouter hook from next/navigation
  const selectRole = useAuthStore((state) => state.selectRole);

  const handleRoleSelect = (role: 'patient' | 'provider') => {
    selectRole(role);
    router.replace(`/${role}/auth`); // Redirect using next/navigation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Select Your Role</h1>
      <div className="flex space-x-6">
        <button
          onClick={() => handleRoleSelect('patient')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out text-lg"
        >
          I am a Patient
        </button>
        <button
          onClick={() => handleRoleSelect('provider')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out text-lg"
        >
          I am a Provider
        </button>
      </div>
      <p className="mt-6 text-gray-600">
        Note: This is a mock selection for MVP purposes.
      </p>
    </div>
  );
};

export default RoleSelectionPage;

