import React from 'react';
import { Link } from 'gatsby';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { mainNavigation } from '../data/site-navigation';

function MobileMenu({ isMobileMenuOpen, setMobileMenuOpen }) {
  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  const MotionDialogOverlay = motion.custom(DialogOverlay);
  const MotionDialogContent = motion.custom(DialogContent);

  return (
    <AnimatePresence>
      <MotionDialogOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={isMobileMenuOpen}
        isOpen={isMobileMenuOpen}
        onDismiss={handleClose}
        className="fixed inset-0 z-40 bg-gray-900 bg-opacity-75"
      >
        <MotionDialogContent
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ min: 0, max: 100, bounceDamping: 9 }}
          aria-label="Sidebar menu"
          className="relative flex flex-col h-full max-w-sm px-4 pt-6 pb-8 my-0 ml-auto overflow-y-auto bg-brand-black focus:outline-none focus:shadow-outline"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close sidebar"
            className="flex items-center self-end justify-center w-10 h-10 mb-8 focus:shadow-none"
          >
            <svg
              aria-hidden
              focusable={false}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="px-4 space-y-2 text-right">
            {mainNavigation.map((navItem) => (
              <li key={nanoid()}>
                <Link
                  to={navItem.slug}
                  className="block py-2 pr-6 text-lg font-bold tracking-wide text-white uppercase transition duration-150 ease-in-out focus:bg-white focus:bg-opacity-25 focus:shadow-none"
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </MotionDialogContent>
      </MotionDialogOverlay>
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  setMobileMenuOpen: PropTypes.func,
};

export { MobileMenu };
