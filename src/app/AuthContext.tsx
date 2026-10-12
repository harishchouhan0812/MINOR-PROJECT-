import React, { createContext, useState, useEffect } from 'react';
import { User, AuthContextType, UserRole } from '../types';
import { storage, STORAGE_KEYS } from '../utils/storage';
import { demoUsers } from '../data/users';

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = storage.get<User>(STORAGE_KEYS.CURRENT_USER);
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      storage.set(STORAGE_KEYS.CURRENT_USER, user);
    } else {
      storage.remove(STORAGE_KEYS.CURRENT_USER);
    }
  }, [user]);

  const login = (email: string, password: string) => {
    // Demo login - find user by email
    // In production, this would be an API call
    const foundUser = demoUsers.find((u) => u.email === email);
    
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    storage.remove(STORAGE_KEYS.CURRENT_USER);
  };

  const switchRole = (role: UserRole, userId?: string) => {
    // Demo function to quickly switch between roles for testing
    let targetUser: User | undefined;
    
    if (userId) {
      targetUser = demoUsers.find((u) => u.id === userId);
    } else {
      // Find first user with the specified role
      targetUser = demoUsers.find((u) => u.role === role);
    }
    
    if (targetUser) {
      setUser(targetUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};
