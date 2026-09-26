import Navbar from '../Component/Navbar';
import Ads from '../Component/Ads';
import useTheme from '../Context/ThemeContext';
import Footer from '../Component/Footer';
import Blogs from '../Component/Blogs';
import { Link } from 'react-router-dom';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center relative ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
      <Navbar />
      <img src="/My-Blog-Website/images/Image 2.svg" className="w-[990px] h-[550px]" />
      <div className={`absolute top-89.5 left-50 flex flex-col justify-center items-start gap-3 z-100 border rounded-[5px] w-150 h-67 ${theme === 'dark' ? 'bg-[#181A2A] text-white border-[#181A5A]' : 'bg-white text-black border-[#E2E8F0]'}`}>
        <p className=" ml-10 rounded-[5px] w-23 flex justify-center bg-[#4B6BFB] text-white">Technology</p>
        <h1 className="text-3xl ml-10 font-bold flex flex-col gap-1">
          <span>The Impact of Technology on </span>
          <span>the Workplace: How </span>
          <span>Technology is Changing</span>
        </h1>
        <div className="flex ml-10 gap-2">
          <img src="/My-Blog-Website/images/Image.svg" className="w-6 h-6 rounded-full" />
          <p className=" opacity-50">jason Francisco</p>
          <p className=" opacity-50">August 20, 2022</p>
        </div>
        <Link to={`/author`} className="p-1 rounded-[5px] text-white w-40 flex ml-108 bg-[#4B6BFB] text-[14px] font-bold">
          <span>Go To The Author</span>
          <div 
            className={`w-6 h-6 mask-[url(/My-Blog-Website/images/circle-arrow-right-solid-full.svg)] mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-[#141624]' : 'bg-white'}`} 
          />
        </Link>
      </div>
      <Ads />
      <div className="flex flex-col items-start w-250 gap-2">
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Latest Post</h1>
        <Blogs />
      </div>
      <Ads />
      <Footer className=""/>
    </div>
  )

}
