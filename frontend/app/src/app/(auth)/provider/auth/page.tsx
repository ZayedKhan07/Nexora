'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';

const ProviderAuthPage = () => {
  const router = useRouter();
  const { isAuthenticated, userRole, login } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && userRole === 'provider') {
      router.replace('/provider/dashboard');
    } else if (userRole !== 'provider' && userRole !== null) {
      // If role is selected but not provider, redirect back to role selection or auth entry
      router.replace('/select-role'); // Or '/' if that's the auth entry
    } else if (!userRole) {
      router.replace('/select-role');
    }
  }, [isAuthenticated, userRole, router]);

  const handleLogin = () => {
    login(); // Mock login state
    // The useEffect hook will handle redirection
  };

  if (userRole !== 'provider') {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Provider Login
      </h1>
      
      <p className="mb-6 text-gray-600">Login to access provider features.</p>

      <button onClick={handleLogin} className="w-full px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out text-lg">
        Login as Provider
      </button>

      {/* No signup option for providers in this MVP phase */}
    </div>
  );
};

export default ProviderAuthPage;
