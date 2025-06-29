import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row md:justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600">ALX Listings</div>

      <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
        {/* Accommodation Types */}
        {["Rooms", "Mansion", "Countryside", "Villa"].map((type) => (
          <a
            key={type}
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            {type}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border rounded-md p-2 focus:outline-indigo-500"
        />
        <button className="text-indigo-600 font-semibold hover:underline">
          Sign In
        </button>
        <button className="text-indigo-600 font-semibold hover:underline">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
