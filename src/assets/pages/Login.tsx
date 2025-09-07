import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Login() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-96">
          <h2 className="text-3xl font-bold text-center text-primary">Welcome Back 👋</h2>
          <p className="text-center text-gray-500 mt-2">Login to continue your journaling journey</p>
          
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
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
export default Login;