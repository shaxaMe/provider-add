// src/layouts/Layout.tsx
import { Outlet } from 'react-router-dom'
import Nav from '@/components/navbar'
const Layout = () => {
  return (
    <div>
      <header>
        {/* Navbar  */}
          <Nav />
        {/* Navbar  */}

      </header>

      <main>
        <Outlet /> {/* Bu yerda child routes chiqadi */}
      </main>
    </div>
  )
}

export default Layout
