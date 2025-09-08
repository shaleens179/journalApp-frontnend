import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem("user") || null);

  const login = (userName: string) => {
    localStorage.setItem("user", userName);
    setUser(userName);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
};
