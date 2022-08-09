import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/HomeUser/Home";
import { HomeAdmin } from "./pages/HomeAdmin/HomeAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
