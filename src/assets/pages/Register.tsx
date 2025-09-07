import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-primary">Register</h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
