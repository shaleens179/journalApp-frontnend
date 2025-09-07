import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  const dummyEntries = [
    { id: 1, title: "My First Journal", content: "This is my first entry!" },
    { id: 2, title: "Day at College", content: "Had a great day coding..." },
    { id: 3, title: "Life Update", content: "Feeling motivated today 🚀" },
  ];

  return (
    <PageWrapper>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-dark mb-6">📓 My Journal Entries</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition cursor-pointer"
            >
              <h2 className="font-semibold text-lg text-primary">{entry.title}</h2>
              <p className="text-gray-600 mt-2">{entry.content}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/editor">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-600"
          >
            ➕ New Entry
          </motion.button>
        </Link>
      </div>
    </PageWrapper>
  );
}
