import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-18 flex items-center justify-between py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-serif text-xl md:text-2xl tracking-widest font-bold text-gray-900 hover:opacity-70 transition-opacity"
        >
          BAEMONT
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/products', label: 'Collections', end: false },
            { to: '/about', label: 'About', end: false },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-xs font-medium tracking-widest uppercase transition-colors pb-1 border-b-2 ${
                  isActive
                    ? 'text-gray-900 border-gray-900'
                    : 'text-gray-500 border-transparent hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/login"
            className="hidden md:block text-xs font-medium tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            Account
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase bg-gray-900 text-white px-4 py-2 rounded hover:opacity-85 transition-opacity"
          >
            Cart
            <span className="bg-amber-400 text-gray-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Hamburger button */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-5 h-px bg-gray-900 transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-gray-900 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-gray-900 transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/products', label: 'Collections', end: false },
            { to: '/about', label: 'About', end: false },
            { to: '/login', label: 'Account', end: false },
            { to: '/cart', label: 'Cart', end: false },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase py-4 border-b border-gray-100 last:border-none transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar