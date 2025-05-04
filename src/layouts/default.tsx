// src/layouts/Layout.tsx
import Nav from "@/components/navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <header>
        {/* Navbar  */}
        <Nav />
        {/* Navbar  */}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
