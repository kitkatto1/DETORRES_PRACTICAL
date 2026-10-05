import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Users from "./pages/users";
import UserDetails from "./pages/userDetails";
import About from "./pages/about";
import NotFound from "./pages/notFound";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
// Main application component with routing and theme providers
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          favoritesCount={favorites.length} 
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/users" 
              element={<Users favorites={favorites} onToggleFavorite={handleToggleFavorite} />} 
            />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}