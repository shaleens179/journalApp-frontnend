import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- AUTH ----------
export const registerUser = (user: { userName: string; password: string }) =>
  api.post("/user", user);

export const loginUser = (credentials: { userName: string; password: string }) =>
  api.post("/user/login", credentials);

// ---------- JOURNALS ----------
export const getJournalEntries = (userName: string) =>
  api.get(`/journal/${userName}`);

export const createJournalEntry = (
  userName: string,
  entry: { title: string; content: string }
) => api.post(`/journal/${userName}`, entry);

export const updateJournalEntry = (
  userName: string,
  entryId: string,
  entry: { title?: string; content?: string }
) => api.put(`/journal/id/${userName}/${entryId}`, entry);

export const deleteJournalEntry = (userName: string, entryId: string) =>
  api.delete(`/journal/id/${userName}/${entryId}`);

export default api;
