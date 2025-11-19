import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from "react";


type PageKey = 'home' | 'projects' | 'design' | 'about' | 'contact';

interface LayoutProps {
  children: ReactNode;
  currentPage: PageKey;
  onNavChange: (page: PageKey) => void;
}

export default function Layout({ children, currentPage, onNavChange }: LayoutProps) {
  return (
    <div className="app-root">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar currentPage={currentPage} onNavChange={onNavChange} />
      <main id="main" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
