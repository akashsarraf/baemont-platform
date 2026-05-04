import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          BAEMONT
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Collections
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right side actions */}
        <div className={styles.actions}>
          <Link to="/login" className={styles.actionLink}>
            Account
          </Link>
          <Link to="/cart" className={styles.cartBtn}>
            Cart
            <span className={styles.cartBadge}>0</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen1 : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen2 : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to="/" end className={styles.mobileLink} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={styles.mobileLink} onClick={closeMenu}>
            Collections
          </NavLink>
          <NavLink to="/about" className={styles.mobileLink} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/login" className={styles.mobileLink} onClick={closeMenu}>
            Account
          </NavLink>
          <NavLink to="/cart" className={styles.mobileLink} onClick={closeMenu}>
            Cart
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar