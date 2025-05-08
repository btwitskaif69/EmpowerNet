"use client";

import React, { useState } from "react";
import {
  ResizeableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from "@/components/ui/resizable-navbar"; // update with actual relative path

const navItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "About", link: "#about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <ResizeableNavbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={closeMobileMenu} />
        <NavbarButton href="#get-started">Get Started</NavbarButton>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={mobileOpen} onClick={toggleMobileMenu} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen} onClose={closeMobileMenu}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={closeMobileMenu}
              className="w-full px-4 py-2 text-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="#get-started" className="mt-4 w-full text-center">
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </ResizeableNavbar>
  );
};

export default Navbar;
