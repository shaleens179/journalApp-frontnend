import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function JournalEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content });
    // later we’ll send this to backend
  };

  return (
    <PageWrapper>
      <div className="flex justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6">✍️ New Journal Entry</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="bg-white rounded-lg"
              placeholder="Write your thoughts..."
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Save Entry
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
