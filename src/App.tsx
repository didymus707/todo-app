import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="view flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
