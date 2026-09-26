import useTheme from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex w-full h-15 justify-around items-center px-10 py-5g ${theme === 'dark' ? 'bg-[#12131C]' : 'bg-[#F8F9FA]'} "sticky top-0 left-0 right-0 z-100" `}>
      <Link to={`/`} className={`flex gap-1.5 items-center ${theme === 'dark' ? 'text-white' : 'text-[#141624]'}`}>
        <div 
          className={`w-6 h-6 mask-[url(/Union.svg)] mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-white' : 'bg-[#141624]'}`} 
        />
        <div>Meta<span className="font-bold">Blog</span></div>
      </Link>
      <div className={`flex gap-5 ${theme === 'dark' ? 'text-[#ffffff]' : 'text-[#141624]'}`}>
        <button className="cursor-pointer hover:text-[#007BFF]">Home</button>
        <button className="cursor-pointer hover:text-[#007BFF]">Blog</button>
        <button className="cursor-pointer hover:text-[#007BFF]">Single Post</button>
        <button className="cursor-pointer hover:text-[#007BFF]">Pages</button>
        <button className="cursor-pointer hover:text-[#007BFF]">Contact</button>
      </div>
      <div className="flex gap-3">
        <div className={`flex gap-15 justify-evenly border rounded-[5px] w-38 ${theme === 'dark' ? 'bg-[242535] text-white' : 'bg-[#E2E8F0]'}`}>
          <p className="opacity-50">Search</p>
          <img src="/My-Blog-Website/images/search-outline.svg" className="w-4 h-7" />
        </div>
        <button className={`flex rounded-2xl w-10 h-6 relative cursor-pointer ${theme === 'dark' ? 'bg-[#4B6BFB] text-[#ffffff]' : 'bg-[#E2E8F0] text-[#141624]'}`} onClick={toggleTheme}>
          <img 
            src="/My-Blog-Website/images/Frame 205.svg" 
            className={`absolute ${theme === 'dark' ? 'right-0' : 'left-0'}`}
          />
        </button>
      </div>
    </div>
  )
}
