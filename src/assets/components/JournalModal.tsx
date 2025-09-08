import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root"); // important for accessibility

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
}

const JournalModal: React.FC<Props> = ({ isOpen, onClose, onSubmit, initialTitle = "", initialContent = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const handleSubmit = () => {
    if (!title || !content) return alert("Title and content are required!");
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md mx-auto mt-20 shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
    >
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">📝 Journal Entry</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full rounded dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 mb-2 w-full rounded dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Save
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default JournalModal;
