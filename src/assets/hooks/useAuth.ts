// src/assets/hooks/useAuth.ts
import { useState, useEffect } from "react";

export function useAuth() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) setUserName(storedUser);
  }, []);

  const login = (user: string) => {
    localStorage.setItem("userName", user);
    setUserName(user);
  };

  const logout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
  };

  const isLoggedIn = !!userName;

  return { userName, isLoggedIn, login, logout };
}
