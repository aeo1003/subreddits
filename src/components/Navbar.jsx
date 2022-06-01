import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

//   return <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>Navbar</div>;
  return <div className='navbar'>Navbar</div>;
}