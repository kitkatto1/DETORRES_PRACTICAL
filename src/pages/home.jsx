import { Link } from "react-router-dom";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
        Welcome to Team Directory App
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Easily manage, search, and view profiles of your entire organization in one clean dashboard.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/users">
          <Button label="Explore Users" variant="primary" />
        </Link>
      </div>
    </div>
  );
}