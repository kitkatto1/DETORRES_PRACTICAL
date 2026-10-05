import { Link } from "react-router-dom";
import Button from "./button";

export default function UserCard({ user, isFavorite, onToggleFavorite, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h3>
          <button 
            onClick={() => onToggleFavorite(user.id)}
            className="text-xl focus:outline-none cursor-pointer"
            title="Toggle Favorite"
          >
            {isFavorite ? "⭐" : "☆"}
          </button>
        </div>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{user.role} at {user.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
        
        <div className="mt-3 text-xs text-gray-400">{children}</div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link to={`/users/${user.id}`}>
          <Button label="View Details" variant="primary" />
        </Link>
      </div>
    </div>
  );
}