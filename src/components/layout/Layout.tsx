import React from 'react';
import Navigation from './Navigation';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Navigation />
      <main className="max-w-7xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 