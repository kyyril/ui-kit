import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KitDetail from "./pages/KitDetail";
import KitViewer from "./pages/KitViewer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kit/:id" element={<KitDetail />} />
        <Route path="/:kitId/*" element={<KitViewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
