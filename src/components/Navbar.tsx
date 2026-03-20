import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Music,
  Headphones,
  Mail,
  PlayCircle,
  Search } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'ABOUT US',
    path: '/about'
  },
  {
    name: 'EPISODES',
    path: '/episodes'
  }];

  const socialIcons = [
  {
    icon: Music,
    label: 'Spotify',
    href: '#'
  },
  {
    icon: Headphones,
    label: 'Apple Podcasts',
    href: '#'
  },
  {
    icon: Mail,
    label: 'Contact',
    href: '#'
  },
  {
    icon: PlayCircle,
    label: 'YouTube',
    href: '#'
  },
  {
    icon: Search,
    label: 'Search',
    href: '#'
  }];

  return (
    <header className="w-full bg-white border-b border-soft-pink sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>
              <img
                src="/gpt-image-1.5-high-fidelity_a_I\u2019m_getting_ready_to_(1).png"
                alt="Proof of Life Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              
            </NavLink>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center justify-center flex-1">
            {links.map((link) =>
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
              `font-sans text-sm uppercase tracking-widest font-bold transition-colors duration-300 relative py-2 ${isActive ? 'text-brand-teal' : 'text-brand-charcoal hover:text-hot-pink'}`
              }>
              
                {({ isActive }) =>
              <>
                    {link.name}
                    {isActive &&
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-teal"
                  initial={false} />

                }
                  </>
              }
              </NavLink>
            )}
          </nav>

          {/* Right: Streaming & Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 justify-end flex-shrink-0">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="text-brand-charcoal hover:text-hot-pink transition-colors duration-300">
                  
                  <Icon className="w-5 h-5" />
                </a>);

            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-hot-pink focus:outline-none transition-colors"
              aria-label="Toggle menu">
              
              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.nav
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          className="md:hidden bg-white border-t border-soft-pink overflow-hidden">
          
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
              {/* Mobile Links */}
              {links.map((link) =>
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
              `block px-3 py-2 font-sans text-sm uppercase tracking-widest font-bold text-center w-full transition-colors ${isActive ? 'text-brand-teal bg-brand-blush rounded-md' : 'text-brand-charcoal hover:text-hot-pink'}`
              }>
              
                  {link.name}
                </NavLink>
            )}

              {/* Mobile Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-soft-pink w-full">
                {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className="text-brand-charcoal hover:text-hot-pink transition-colors duration-300">
                    
                      <Icon className="w-5 h-5" />
                    </a>);

              })}
              </div>
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}