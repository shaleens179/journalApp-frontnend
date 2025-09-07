// src/assets/services/api.ts
import axios from "axios";

// Base URL of your Spring Boot backend
const API_BASE_URL = "http://localhost:8080"; // change if your backend runs on a different port

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ====== USER API ======

// Fetch all users
export const getAllUsers = async () => {
  const response = await api.get("/user");
  return response.data;
};

// Create a new user
export const createUser = async (user: { userName: string; password: string }) => {
  const response = await api.post("/user", user);
  return response.data;
};

// Update user
export const updateUser = async (userName: string, updatedData: { userName?: string; password?: string }) => {
  const response = await api.put(`/user/${userName}`, updatedData);
  return response.data;
};

// ====== JOURNAL API ======

// Fetch all journal entries for a user
export const getJournalEntries = async (userName: string) => {
  const response = await api.get(`/journal/${userName}`);
  return response.data;
};

// Create a new journal entry
export const createJournalEntry = async (userName: string, entry: { title: string; content?: string }) => {
  const response = await api.post(`/journal/${userName}`, entry);
  return response.data;
};

// Update a journal entry
export const updateJournalEntry = async (
  userName: string,
  entryId: string,
  updatedEntry: { title?: string; content?: string }
) => {
  const response = await api.put(`/journal/id/${userName}/${entryId}`, updatedEntry);
  return response.data;
};

// Delete a journal entry
export const deleteJournalEntry = async (userName: string, entryId: string) => {
  const response = await api.delete(`/journal/id/${userName}/${entryId}`);
  return response.data;
};

// Export axios instance if needed elsewhere
export default api;
