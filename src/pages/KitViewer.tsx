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

// Optional body-level classes per kit (mirrors each kit's index.html body class)
const kitBodyClasses: Record<string, string> = {
  "luminous-ui-kit":
    "bg-slate-950 text-white antialiased selection:bg-cyan-500/30 selection:text-cyan-200",
  "retro-terminal-ui":
    "bg-term-black text-term-green font-mono antialiased overflow-x-hidden selection:bg-term-green selection:text-term-black",
  "retro-arcade-ui":
    "bg-pixel-grid text-arcade-text font-sans antialiased overflow-x-hidden min-h-screen",
  "papercraft-ui":
    "bg-paper-bg text-paper-text font-sans antialiased overflow-x-hidden min-h-screen relative",
  "neo-brutalist-ui":
    "bg-neo-bg text-neo-text font-sans antialiased overflow-x-hidden min-h-screen bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]",
  "cyberpunk-hud-ui":
    "bg-cyber-bg text-cyber-cyan font-sans antialiased overflow-x-hidden min-h-screen",
  "clay-pop-ui":
    "bg-clay-bg text-clay-text font-sans antialiased overflow-x-hidden selection:bg-clay-primary selection:text-white",
  "neo-pop-ui-kit":
    "bg-[#f0f0f0] text-gray-900",
  "bubble-ui-button-showcase":
    "bg-[#F0F4F8] text-[#4A5568]",
  "kinetik-ui-button-showcase":
    "bg-[#F6F8FA] text-ink-900",
  "sketchbook-ui-button-showcase":
    "bg-[#fffdf5] text-[#1f2937]",
};

const KitViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [kit, setKit] = useState<UIKitItem | null>(null);
  const appliedBodyClasses = React.useRef<string[]>([]);

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

  // Apply kit-specific classes to <body> so kits that expect body-level
  // styles (index.html body classes) render correctly when embedded.
  useEffect(() => {
    if (!kit) return;

    // Remove previously applied classes
    appliedBodyClasses.current.forEach((c) =>
      document.body.classList.remove(c)
    );
    appliedBodyClasses.current = [];

    const classes = (kitBodyClasses[kit.id] ?? "").split(/\s+/).filter(Boolean);
    classes.forEach((c) => document.body.classList.add(c));
    appliedBodyClasses.current = classes;

    return () => {
      appliedBodyClasses.current.forEach((c) =>
        document.body.classList.remove(c)
      );
      appliedBodyClasses.current = [];
    };
  }, [kit]);

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
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-50 shadow-lg">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="hover:opacity-80 transition-opacity text-white font-bold text-lg"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-md"
              style={{ backgroundColor: "white" }}
            >
              {kit.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{kit.name}</h2>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Render UI Kit Component and apply kit-specific body classes so
          kits that expect body-level styles (from their own index.html)
          show correct background and text color when embedded here. */}
      <div className={"min-h-screen"} style={{ marginTop: "80px" }}>
        {KitComponent ? (
          <Suspense fallback={null}>
            <KitComponent />
          </Suspense>
        ) : null}
      </div>
    </>
  );
};

export default KitViewer;
