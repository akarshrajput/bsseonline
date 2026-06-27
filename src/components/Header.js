"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <span className="label">NCVT BTP CODE:-</span>
        <span className="value">BTP1927421</span>
        <span style={{ color: '#ddd', margin: '0 5px' }}>|</span>
        <span className="highlight">MSMEUAN</span>
        <span className="label">- UP210000425</span>
        <span style={{ color: '#ddd', margin: '0 5px' }}>|</span>
        <span className="highlight">Udyam Registration No-</span>
        <span className="label">UDYAM-UP-21-0000725</span>
      </div>

      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            {/* <Image
              src="/main_logo_1782533288641.png"
              alt="Board Logo"
              width={70}
              height={70}
              className="logo-image"
            /> */}
            <div className="logo-text">
              <h1 className="logo-title-hi">उच्चतर माध्यमिक शिक्षा परिषद</h1>
              <h2 className="logo-title-en">BOARD OF SENIOR SECONDARY EDUCATION</h2>
              <div className="logo-subtitle">(AN ENTERPRISES UNDER MSMED ACT 2006)</div>
              <div className="logo-subtitle">MINISTRY OF MSME GOVT. OF INDIA, NEW DELHI</div>
            </div>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/syllabus" className={pathname === '/syllabus' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Syllabus</Link></li>
              <li><Link href="/administration" className={pathname === '/administration' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Administration</Link></li>
              <li><Link href="/check-school-code" className={pathname === '/check-school-code' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Recognized Schools</Link></li>
              <li><Link href="/iti" className={pathname === '/iti' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Recognized ITI</Link></li>
              <li><Link href="/online-registration" className={pathname === '/online-registration' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Online Registration</Link></li>
              <li>
                <Link href="/result" className={pathname === '/result' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '3px' }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Result
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
