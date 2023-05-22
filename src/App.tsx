import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
