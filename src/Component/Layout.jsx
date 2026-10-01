import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function Layout() {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onContactClick={scrollToFooter}/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer ref={footerRef}/>
    </div>
  );
}
