import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usersData } from "../data/users";
import Button from "../components/button";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundUser = usersData.find((u) => u.id === parseInt(id));
    setUser(foundUser);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (user) {
      document.title = user.name;
    } else {
      document.title = "User Not Found";
    }
  }, [user]);

  if (loading) return <div className="text-center py-12">Loading details...</div>;

  if (!user) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-rose-600">User not found.</h2>
        <p className="text-gray-500 mt-2">The user you are looking for does not exist.</p>
        <div className="mt-6">
          <Link to="/users">
            <Button label="Back to Users" variant="primary" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg mt-1">{user.role}</p>
        
        <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-6 space-y-4">
          <div>
            <span className="text-xs text-gray-400 uppercase font-semibold">Email Address</span>
            <p className="text-gray-800 dark:text-gray-200 font-medium">{user.email}</p>
          </div>
          <div>
            <span className="text-xs text-gray-400 uppercase font-semibold">Company</span>
            <p className="text-gray-800 dark:text-gray-200 font-medium">{user.company}</p>
          </div>
          <div>
            <span className="text-xs text-gray-400 uppercase font-semibold">User Identifier ID</span>
            <p className="text-gray-800 dark:text-gray-200 font-medium">#{user.id}</p>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/users">
            <Button label="← Back to Users" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}