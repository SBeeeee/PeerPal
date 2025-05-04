// src/context/AuthContext.js
'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        if (!token) {
          setLoading(false);
          return;
        }

        // Configure axios with token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        const response = await axios.get(`${BACKEND_URL}/profile`);
        setUser(response.data);
      } catch (err) {
        // Clear invalid token
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = '';
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const clearAuthToken = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
  };

  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(`${BACKEND_URL}/signup`, {
        name,
        email,
        password
      });
      
      const { token, newUser } = response.data;
      setAuthToken(token);
      setUser(newUser);
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(`${BACKEND_URL}/login`, {
        email,
        password
      });
      
      const { token, user: userData } = response.data;
      setAuthToken(token);
      setUser(userData);
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await axios.get(`${BACKEND_URL}/logout`);
      clearAuthToken();
      setUser(null);
      router.push('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    setLoading,
    error,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};