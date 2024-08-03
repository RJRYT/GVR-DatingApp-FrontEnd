import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <section className="page-content font-sans">
      <main className=" mx-auto xl:max-w-[768px] relative">
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;
