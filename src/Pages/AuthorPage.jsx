import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import useTheme from '../Context/ThemeContext'
import { Link } from 'react-router-dom'
import Blogs from '../Component/Blogs'

export default function AuthorPage() {
    const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
    <Navbar />
    <div className={`flex flex-col my-11 items-center justify-center gap-4 w-250 h-90 m-auto rounded-lg ${theme === 'dark' ? 'bg-[#24283B]' : 'bg-[#F4F5F7]'}`}>
        <div className="flex gap-2">
            <img src="/My-Blog-Website/images/Image1.svg" alt="" />
            <div className="flex flex-col gap-1">
                <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Jonathan Doe</h1>
                <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-black opacity-50'}`}>Collaboration & Editor</p>
            </div>
        </div>
        <p className={`w-110 ${theme === 'dark' ? 'text-gray-500' : 'text-black opacity-50'}`}>Meet Jonathan Doe, a passionate writer and blooger with a love for technology and travel. Jonathan holds a degree in computer science and has spent years working in tech industry, gaining a deep understanding of the impact technology has on our lives</p>
        <div className="flex justify-between w-30">
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                  className={`w-3 h-3 mask-[url(/My-Blog-Website/images/logo-facebook.svg)] mask-contain mask-no-repeat bg-white`} 
                />
            </div>
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                   className={`w-3 h-3 mask-[url(/My-Blog-Website/images/logo-twitter.svg)] mask-contain mask-no-repeat bg-white`} 
                />
            </div>
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                  className={`w-3 h-3 mask-[url(/My-Blog-Website/images/logo-instagram.svg)] mask-contain mask-no-repeat bg-white`} 
                />
            </div>
            
          <div className='p-2 rounded-lg bg-gray-600'>
            <div 
              className={`w-3 h-3 mask-[url(/My-Blog-Website/images/logo-youtube.svg)] mask-contain mask-no-repeat bg-white`} 
            />
          </div>
            
        </div>
        <Link to={`/author`} className="p-1 rounded-[5px] text-white w-40 flex  bg-[#4B6BFB] text-[14px] font-bold">
          <span>Go To The Author</span>
          <div 
            className={`w-6 h-6 mask-[url(/My-Blog-Website/images/circle-arrow-right-solid-full.svg)] mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-[#141624]' : 'bg-white'}`} 
          />
        </Link>
    </div>
    <div className="m-auto w-250">
      <Blogs />
    </div>
    <Footer />
    </div>
  )
}
