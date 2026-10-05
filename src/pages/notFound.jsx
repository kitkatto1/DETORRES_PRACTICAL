import { Link } from "react-router-dom";
import Button from "../components/button";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-20">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link to="/">
          <Button label="Go Back Home" variant="primary" />
        </Link>
      </div>
    </div>
  );
}