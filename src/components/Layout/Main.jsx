import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <section className="page-content font-sans">
      <main className="container mx-auto p-4 max-w-[600px]">
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;
