import React from "react";
import { UIKitItem } from "../types";

interface UIKitCardProps {
  kit: UIKitItem;
  onClick?: () => void;
}

const UIKitCard: React.FC<UIKitCardProps> = ({ kit, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200 h-full cursor-pointer bg-white text-left"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: kit.color }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0"
            style={{ backgroundColor: kit.color, color: "white" }}
          >
            {kit.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors text-left">
            {kit.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm flex-1 group-hover:text-gray-700 transition-colors text-left">
          {kit.description}
        </p>

        {/* Footer with arrow */}
        <div className="mt-4 flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
          <span className="text-sm font-medium">View</span>
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default UIKitCard;
