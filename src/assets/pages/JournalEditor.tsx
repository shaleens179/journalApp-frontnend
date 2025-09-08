import React, { useState, useEffect } from "react";
import { getJournalEntries, createJournalEntry, deleteJournalEntry } from "../services/api";

const JournalEditor: React.FC = () => {
  const [userName] = useState("Shaleen08"); // Replace with auth context later
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    getJournalEntries(userName)
      .then((res) => setEntries(res.data))
      .catch((err) => console.error(err));
  };

  const handleAddEntry = async () => {
    if (!title || !content) return alert("Title and content required!");
    try {
      const res = await createJournalEntry(userName, { title, content });
      setEntries([res.data, ...entries]);
      setTitle(""); setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to add entry!");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJournalEntry(userName, id);
      setEntries(entries.filter(e => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete entry!");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">📓 My Journal</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={handleAddEntry}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Add Entry
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl">{entry.title}</h3>
              <button
                onClick={() => handleDelete(entry.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✖
              </button>
            </div>
            <p className="mt-2">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalEditor;
