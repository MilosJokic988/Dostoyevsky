import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Pokušaj da učitaš korisnika iz localStorage pri pokretanju
    const stored = localStorage.getItem('dostoyevsky_user');
    return stored ? JSON.parse(stored) : null;
  });

  const register = (username, password) => {
    localStorage.setItem('dostoyevsky_user', JSON.stringify({ username, password }));
    setUser({ username });
    return true; // signalizuj uspeh
  };

  const login = (username, password) => {
    const stored = JSON.parse(localStorage.getItem('dostoyevsky_user'));
    if (stored && stored.username === username && stored.password === password) {
      setUser({ username });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
