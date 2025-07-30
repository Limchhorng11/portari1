import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout; 