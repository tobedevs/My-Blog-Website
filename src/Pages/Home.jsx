import Navbar from '../Component/Navbar';
import Ads from '../Component/Ads';
import useTheme from '../Context/ThemeContext';
import Footer from '../Component/Footer';
import Blogs from '../Component/Blogs';
import { Link } from 'react-router-dom';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center relative w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
      <img src={`${import.meta.env.BASE_URL}Image 2.svg`} className="w-full max-w-247.5 h-75 md:h-137.5 object-cover px-4 md:px-0 rounded-lg md:rounded-none" />
      <div className={`relative md:absolute md:top-72 lg:top-105 md:left-6 lg:left-56 flex flex-col justify-center items-start gap-3 z-20 border rounded-[5px] w-[92%] md:w-[600px] h-auto md:h-67 p-6 my-4 md:my-0 ${theme === 'dark' ? 'bg-[#181A2A] text-white border-[#181A5A]' : 'bg-white text-black border-[#E2E8F0]'}`}>
        <p className="ml-0 md:ml-10 rounded-[5px] w-23 flex justify-center bg-[#4B6BFB] text-white">Technology</p>
        <h1 className="text-xl md:text-3xl ml-0 md:ml-10 font-bold flex flex-col gap-1">
          <span>The Impact of Technology on </span>
          <span>the Workplace: How </span>
          <span>Technology is Changing</span>
        </h1>
        <div className="flex ml-0 md:ml-10 gap-2 items-center">
          <img src={`${import.meta.env.BASE_URL}Image.svg`} className="w-6 h-6 rounded-full" />
          <p className="opacity-50">jason Francisco</p>
          <p className="opacity-50">August 20, 2022</p>
        </div>
        <Link to={`/author`} className="p-1 rounded-[5px] text-white w-40 flex ml-0 md:ml-100 bg-[#4B6BFB] text-[14px] font-bold justify-center items-center gap-1">
          <span>Go To The Author</span>
          <div 
            className={`w-6 h-6 mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-[#141624]' : 'bg-white'}`}
            style={{
              maskImage: `url(${import.meta.env.BASE_URL}circle-arrow-right-solid-full.svg)`,
              WebkitMaskImage: `url(${import.meta.env.BASE_URL}circle-arrow-right-solid-full.svg)`
            }}
          />
        </Link>
      </div>
      <Ads />
      <div className="flex flex-col items-start w-full max-w-250 px-4 md:px-0 gap-2 mt-8 md:mt-24">
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Latest Post</h1>
        <Blogs />
      </div>
      <Ads />
    </div>
  )
}
