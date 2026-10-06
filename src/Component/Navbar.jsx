import { useState } from 'react';
import useTheme from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar({ onContactClick }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-[#12131C]' : 'bg-[#F8F9FA]'}`}>
      <div className={`flex w-full min-h-15 justify-between items-center px-4 md:px-10 py-3 md:py-5 ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#141624]'}`}>
        <Link to={`/`} className={`flex gap-1.5 items-center ${theme === 'dark' ? 'text-white' : 'text-[#141624]'}`}>
          <div 
            className={`w-6 h-6 mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-white' : 'bg-[#141624]'}`} 
            style={{
              maskImage: `url(${import.meta.env.BASE_URL}Union.svg)`,
              WebkitMaskImage: `url(${import.meta.env.BASE_URL}Union.svg)`
            }}
          />
          <div>Meta<span className="font-bold">Blog</span></div>
        </Link>
        <div className={`flex flex-col justify-start items-start gap-5 ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#141624]'}`}>
  <Link to={`/`} className="cursor-pointer hover:text-[#007BFF]">Home</Link>
  <Link to={`/blog`} className="cursor-pointer hover:text-[#007BFF]">Blog</Link>
  <Link to={`/admin`} className="cursor-pointer hover:text-[#007BFF]">Single Post</Link>
  <Link to={`/author`} className="cursor-pointer hover:text-[#007BFF]">Pages</Link>
  <button onClick={onContactClick} className="cursor-pointer hover:text-[#007BFF]">Contact</button>
</div>
        <div className="flex items-center gap-3">
          <div className={`hidden sm:flex justify-between items-center px-2 border rounded-[5px] w-36 md:w-38 h-8 ${theme === 'dark' ? 'bg-[#242535] text-white' : 'bg-[#E2E8F0]'}`}>
            <p className="opacity-50 text-xs">Search</p>
            <img src={`${import.meta.env.BASE_URL}search-outline.svg`} className="w-4 h-4" />
          </div>
          <button className={`flex rounded-2xl w-10 h-6 relative cursor-pointer items-center ${theme === 'dark' ? 'bg-[#4B6BFB] text-[#ffffff]' : 'bg-[#E2E8F0] text-[#141624]'}`} onClick={toggleTheme}>
            <img 
              src={`${import.meta.env.BASE_URL}Frame 205.svg`} 
              className={`absolute ${theme === 'dark' ? 'right-0' : 'left-0'}`}
            />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex items-center justify-center w-8 h-8 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div 
              className={`w-6 h-6 mask-contain mask-no-repeat transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
              } ${theme === 'dark' ? 'bg-white' : 'bg-[#141624]'}`} 
              style={{
                maskImage: `url(${import.meta.env.BASE_URL}${isOpen ? 'close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg' : 'menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'})`,
                WebkitMaskImage: `url(${import.meta.env.BASE_URL}${isOpen ? 'close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg' : 'menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'})`
              }}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 py-5 border-t ${theme === 'dark' ? 'bg-[#12131C] text-[#ffffff] border-[#242535]' : 'bg-[#F8F9FA] text-[#141624] border-gray-200'}`}>
          <Link to={`/`} onClick={closeMenu} className="cursor-pointer hover:text-[#007BFF]">Home</Link>
          <Link to={`/blog`} onClick={closeMenu} className="cursor-pointer hover:text-[#007BFF]">Blog</Link>
          <Link to={`/admin`} onClick={closeMenu} className="cursor-pointer hover:text-[#007BFF]">Single Post</Link>
          <Link to={`/author`} onClick={closeMenu} className="cursor-pointer hover:text-[#007BFF]">Pages</Link>
          <button onClick={() => { closeMenu(); onContactClick?.(); }} className="cursor-pointer hover:text-[#007BFF]">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
