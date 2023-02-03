import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} Omnes Blockchain. Made with{' '}
        <a href="#">skynance.net</a>.
      </div>
    </footer>
  );
};
