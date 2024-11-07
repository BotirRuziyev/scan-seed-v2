import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <div className="page-body main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
