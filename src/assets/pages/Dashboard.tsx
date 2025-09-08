import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard: React.FC<{ darkMode: boolean; setDarkMode: (val: boolean) => void }> = ({ darkMode, setDarkMode }) => {
  const dummyEntries = [
    { id: 1, title: "My First Journal", content: "This is my first entry!" },
    { id: 2, title: "Day at College", content: "Had a great day coding..." },
    { id: 3, title: "Life Update", content: "Feeling motivated today 🚀" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📓 My Journal Entries</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-900 px-4 py-2 rounded transition"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyEntries.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="font-semibold text-lg">{entry.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{entry.content}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/journal">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
        >
          ➕ New Entry
        </motion.button>
      </Link>
    </div>
  );
};

export default Dashboard;
