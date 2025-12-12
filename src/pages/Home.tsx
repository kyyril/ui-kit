import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import UIKitCard from "../components/UIKitCard";
import kits from "../metadata.json";
import { UIKitItem } from "../types";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKits = useMemo(() => {
    return (kits as UIKitItem[]).filter((kit) => {
      const matchesSearch =
        kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleKitClick = (kitPath: string) => {
    window.location.href = kitPath;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                ✨ UI Kit Showcase
              </h1>
              <p className="text-gray-600">
                Explore our collection of beautiful UI component kits
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search UI kits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 border-2 border-gray-200 rounded-full focus:outline-none focus:border-gray-400 transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-3xl font-bold text-gray-900">
              {kits.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Total UI Kits</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-3xl font-bold text-gray-900">
              {filteredKits.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Matching Results</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600 mt-1">Components</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-3xl font-bold text-gray-900">∞</div>
            <div className="text-sm text-gray-600 mt-1">Possibilities</div>
          </div>
        </div>

        {/* Grid */}
        {filteredKits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKits.map((kit) => (
              <UIKitCard
                key={kit.id}
                kit={kit}
                onClick={() => handleKitClick(kit.path)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No kits found
            </h2>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 mb-4">
            Discover amazing UI components across different design aesthetics
          </p>
          <p className="text-sm text-gray-500">
            © 2025 UI Kit Showcase. All kits included are original creations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
