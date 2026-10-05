import { useState, useEffect } from "react";
import { usersData } from "../data/users";
import UserCard from "../components/userCard";
import Loader from "../components/loader";
import ErrorMessage from "../components/errorMessage";

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.title = `Users (${users.length})`;
  }, [users]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team Members</h1>
        <input
          type="text"
          placeholder="Search by name, email, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-80"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users match your search criteria." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            >
              <span>ID: #{user.id}</span>
            </UserCard>
          ))}
        </div>
      )}
    </div>
  );
}