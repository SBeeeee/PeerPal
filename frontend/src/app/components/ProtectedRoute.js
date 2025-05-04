// src/components/ProtectedRoute.js
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
        alert("u shoul login")
      router.push('/auth/login');
    }
  }, [isAuthenticated, loading, router]);

  // Show nothing while checking authentication
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // If authenticated, show the children
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;