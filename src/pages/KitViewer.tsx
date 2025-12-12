import React, { useEffect, useState, Suspense, lazy } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import kits from "../metadata.json";
import { UIKitItem } from "../types";

// Dynamically import each UI kit's App component
const kitComponents: Record<
  string,
  React.LazyExoticComponent<() => JSX.Element>
> = {
  "bubble-ui-button-showcase": lazy(
    () => import("../bubble-ui-button-showcase/App")
  ),
  "clay-pop-ui": lazy(() => import("../clay-pop-ui/App")),
  "cyberpunk-hud-ui": lazy(() => import("../cyberpunk-hud-ui/App")),
  "kinetik-ui-button-showcase": lazy(
    () => import("../kinetik-ui-button-showcase/App")
  ),
  "luminous-ui-kit": lazy(() => import("../luminous-ui-kit/App")),
  "neo-brutalist-ui": lazy(() => import("../neo-brutalist-ui/App")),
  "neo-pop-ui-kit": lazy(() => import("../neo-pop-ui-kit/App")),
  "papercraft-ui": lazy(() => import("../papercraft-ui/App")),
  "retro-arcade-ui": lazy(() => import("../retro-arcade-ui/App")),
  "retro-terminal-ui": lazy(() => import("../retro-terminal-ui/App")),
  "sketchbook-ui-button-showcase": lazy(
    () => import("../sketchbook-ui-button-showcase/App")
  ),
};

const KitViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [kit, setKit] = useState<UIKitItem | null>(null);

  useEffect(() => {
    // Get the kit ID from the path
    const kitId = location.pathname.split("/").filter(Boolean)[0];
    const foundKit = (kits as UIKitItem[]).find((k) => k.id === kitId);

    if (foundKit) {
      setKit(foundKit);
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  if (!kit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const KitComponent = kitComponents[kit.id];

  return (
    <>
      {/* Floating Header - Overlay on top */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-50 shadow-lg">
        <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="hover:opacity-80 transition-opacity text-white font-bold text-lg"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md"
              style={{ backgroundColor: kit.color }}
            >
              {kit.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{kit.name}</h2>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Full Project View - Rendered as-is */}
      {KitComponent ? (
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading {kit.name}...</p>
              </div>
            </div>
          }
        >
          <KitComponent />
        </Suspense>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">UI Kit not found</p>
        </div>
      )}
    </>
  );
};

export default KitViewer;
