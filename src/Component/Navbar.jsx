import useTheme from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex flex-col md:flex-row w-full min-h-15 justify-between items-center px-4 md:px-10 py-3 md:py-5 gap-4 md:gap-0 ${theme === 'dark' ? 'bg-[#12131C]' : 'bg-[#F8F9FA]'} sticky top-0 left-0 right-0 z-50`}>
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
      <div className={`flex flex-wrap justify-center gap-3 md:gap-5 ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#141624]'}`}>
        <Link to={`/`} className="cursor-pointer hover:text-[#007BFF]">Home</Link>
        <Link to={`/blog`} className="cursor-pointer hover:text-[#007BFF]">Blog</Link>
        <Link to={`/admin`} className="cursor-pointer hover:text-[#007BFF]">Single Post</Link>
        <Link to={`/author`} className="cursor-pointer hover:text-[#007BFF]">Pages</Link>
        <button onClick={handleContactClick} className="cursor-pointer hover:text-[#007BFF]">Contact</button>
      </div>
      <div className="flex items-center gap-3">
        <div className={`flex justify-between items-center px-2 border rounded-[5px] w-36 md:w-38 h-8 ${theme === 'dark' ? 'bg-[#242535] text-white' : 'bg-[#E2E8F0]'}`}>
          <p className="opacity-50 text-xs">Search</p>
          <img src={`${import.meta.env.BASE_URL}search-outline.svg`} className="w-4 h-4" />
        </div>
        <button className={`flex rounded-2xl w-10 h-6 relative cursor-pointer items-center ${theme === 'dark' ? 'bg-[#4B6BFB] text-[#ffffff]' : 'bg-[#E2E8F0] text-[#141624]'}`} onClick={toggleTheme}>
          <img 
            src={`${import.meta.env.BASE_URL}Frame 205.svg`} 
            className={`absolute ${theme === 'dark' ? 'right-0' : 'left-0'}`}
          />
        </button>
      </div>
    </div>
  )
}
