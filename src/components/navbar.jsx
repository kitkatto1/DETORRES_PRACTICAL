import { NavLink } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, favoritesCount }) {
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 dark:text-indigo-400 font-bold underline underline-offset-4"
      : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors";

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className="font-extrabold text-xl text-indigo-600 dark:text-indigo-400">TeamDir</span>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/users" className={getLinkClass}>Users</NavLink>
            <NavLink to="/about" className={getLinkClass}>About</NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-semibold">
            Favorites: {favoritesCount}
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium cursor-pointer"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}