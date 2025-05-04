// src/layouts/Layout.tsx
// import Nav from '@/components/navbar'
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <header>{/* Login page header if needed */}</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LoginLayout;
