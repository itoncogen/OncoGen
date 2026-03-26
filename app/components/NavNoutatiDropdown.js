'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const items = [
  { href: '/noutati/anunturi', label: 'Anunțuri' },
  { href: '/noutati/articole', label: 'Articole' }
];

export default function NavNoutatiDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <li className={`nav-dropdown-parent${isOpen ? ' nav-dropdown-open' : ''}`} ref={wrapperRef}>
      <div className="nav-noutati-trigger">
        <button
          type="button"
          className="nav-noutati-label"
          aria-expanded={isOpen}
          aria-label="Deschide meniul Noutăți"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Noutăți
        </button>
        <button
          type="button"
          className="nav-dropdown-arrow"
          aria-label="Deschide submeniul Noutăți"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ▾
        </button>
      </div>
      <ul className="nav-dropdown">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
