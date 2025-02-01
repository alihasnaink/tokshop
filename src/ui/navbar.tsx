import React from 'react';
import '../index.css';
import { auth } from '../firebase/config';
import SwipeableGallery from '@/components/SwipeableGallery';

export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <nav className="navbar w-full flex justify-between items-center px-6 py-4">
      <div className="logo">
        <img src="/src/assets/loogo.png" alt="Logo" className="h-8" />
      </div>
      {isAuthenticated && (
        <button 
          onClick={() => auth.signOut()}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Sign Out
        </button>
      )}
        </nav>
  );
}

export default Navbar;