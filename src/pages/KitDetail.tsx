import React from "react";
import { useParams, Link } from "react-router-dom";
import kits from "../metadata.json";
import { UIKitItem } from "../types";
import { getContrastTextColor } from "../utils/colorUtils";

const KitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const kit = (kits as UIKitItem[]).find((k) => k.id === id);
  const textColor = kit ? getContrastTextColor(kit.color) : "#000000";

  if (!kit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kit Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The UI kit you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-gray-900">← Back</h1>
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ backgroundColor: kit.color }}
            >
              {kit.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{kit.name}</h2>
          </div>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-24">
              <div
                className="w-24 h-24 rounded-xl flex items-center justify-center text-6xl mx-auto mb-4"
                style={{ backgroundColor: kit.color }}
              >
                {kit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {kit.name}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {kit.description}
              </p>
              <a
                href={kit.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: kit.color,
                  color: textColor,
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                View Kit →
              </a>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[600px]">
              <iframe
                src={kit.path}
                title={kit.name}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KitDetail;
