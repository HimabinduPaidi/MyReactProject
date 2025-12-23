// Layout.jsx
import { Navbar } from "@/components/ui/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6">
        <Outlet /> {/* Renders App / Login / Signup pages */}
      </main>
    </div>
  );
};

export default Layout;
