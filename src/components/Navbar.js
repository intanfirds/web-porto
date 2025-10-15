import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home", number: "01." },
    { path: "/about", name: "About", number: "02." },
    { path: "/projects", name: "Projects", number: "03." },
    { path: "/contact", name: "Contact", number: "04." },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: "1rem 1.5rem",
          background: isScrolled ? "rgba(10, 25, 47, 0.95)" : "rgba(10, 25, 47, 0.9)",
          backdropFilter: "blur(10px)",
          transition: "all 0.25s ease",
          borderBottom: isScrolled ? "1px solid rgba(100, 255, 218, 0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              color: "var(--green)",
              textDecoration: "none",
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontFamily: "SF Mono, Fira Code, monospace",
              zIndex: 1001,
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            MyPortfolio
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: window.innerWidth <= 768 ? "none" : "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "var(--green)" : "var(--light-slate)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontFamily: "SF Mono, Fira Code, monospace",
                  transition: "color 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <span style={{ color: "var(--green)", fontSize: "0.8rem" }}>{item.number}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? "flex" : "none",
              flexDirection: "column",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1001,
            }}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                background: isMobileMenuOpen ? "var(--green)" : "var(--light-slate)",
                margin: "3px 0",
                transition: "all 0.3s ease",
                transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            ></span>
            <span
              style={{
                width: "20px",
                height: "2px",
                background: isMobileMenuOpen ? "transparent" : "var(--light-slate)",
                margin: "3px 0",
                transition: "all 0.3s ease",
              }}
            ></span>
            <span
              style={{
                width: "20px",
                height: "2px",
                background: isMobileMenuOpen ? "var(--green)" : "var(--light-slate)",
                margin: "3px 0",
                transition: "all 0.3s ease",
                transform: isMobileMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
              }}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "var(--deep-navy)",
            display: isMobileMenuOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "var(--green)" : "var(--light-slate)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontFamily: "SF Mono, Fira Code, monospace",
                  transition: "color 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ color: "var(--green)", fontSize: "0.9rem" }}>{item.number}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay untuk mobile menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(10, 25, 47, 0.95)",
            zIndex: 999,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
