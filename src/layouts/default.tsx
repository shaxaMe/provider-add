// src/layouts/Layout.tsx
import Nav from '@/components/navbar'
import { ReactNode } from 'react';
interface MainLayoutProps {
    children: ReactNode;
  }
const Layout = ({ children}:MainLayoutProps) => {
  return (
    <div>
      <header>
        {/* Navbar  */}
          <Nav />
        {/* Navbar  */}

      </header>

      <main>
       {children}
      </main>
    </div>
  )
}

export default Layout
