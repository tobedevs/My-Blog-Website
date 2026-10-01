import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function Layout() {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  console.log("Button clicked!"); // 1. Does this print when you click Contact?
    console.log("Footer element:", footerRef.current);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onContactClick={scrollToFooter}/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
