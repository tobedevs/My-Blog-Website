import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import useTheme from '../Context/ThemeContext'
import { Link } from 'react-router-dom'
import Blogs from '../Component/Blogs'

export default function AuthorPage() {
    const { theme } = useTheme();
  return (
    <div className={`w-full overflow-x-hidden ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
    <Navbar />
    <div className={`flex flex-col my-11 items-center justify-center gap-4 w-[92%] md:w-full md:max-w-250 h-auto p-6 md:h-90 m-auto rounded-lg ${theme === 'dark' ? 'bg-[#24283B]' : 'bg-[#F4F5F7]'}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img src={`${import.meta.env.BASE_URL}Image1.svg`} alt="" className="w-16 h-16 rounded-full object-cover" />
            <div className="flex flex-col gap-1">
                <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Jonathan Doe</h1>
                <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-black opacity-50'}`}>Collaboration & Editor</p>
            </div>
        </div>
        <p className={`w-full md:w-110 text-center sm:text-left text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-black opacity-50'}`}>Meet Jonathan Doe, a passionate writer and blooger with a love for technology and travel. Jonathan holds a degree in computer science and has spent years working in tech industry, gaining a deep understanding of the impact technology has on our lives</p>
        <div className="flex justify-between w-30">
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                  className={`w-3 h-3 mask-contain mask-no-repeat bg-white`} 
                  style={{
                    maskImage: `url(${import.meta.env.BASE_URL}logo-facebook.svg)`,
                    WebkitMaskImage: `url(${import.meta.env.BASE_URL}logo-facebook.svg)`
                  }}
                />
            </div>
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                   className={`w-3 h-3 mask-contain mask-no-repeat bg-white`} 
                   style={{
                     maskImage: `url(${import.meta.env.BASE_URL}logo-twitter.svg)`,
                     WebkitMaskImage: `url(${import.meta.env.BASE_URL}logo-twitter.svg)`
                   }}
                />
            </div>
            <div className='p-2 rounded-lg bg-gray-600'>
                <div 
                  className={`w-3 h-3 mask-contain mask-no-repeat bg-white`} 
                  style={{
                    maskImage: `url(${import.meta.env.BASE_URL}logo-instagram.svg)`,
                    WebkitMaskImage: `url(${import.meta.env.BASE_URL}logo-instagram.svg)`
                  }}
                />
            </div>
            
          <div className='p-2 rounded-lg bg-gray-600'>
            <div 
              className={`w-3 h-3 mask-contain mask-no-repeat bg-white`} 
              style={{
                maskImage: `url(${import.meta.env.BASE_URL}logo-youtube.svg)`,
                WebkitMaskImage: `url(${import.meta.env.BASE_URL}logo-youtube.svg)`
              }}
            />
          </div>
            
        </div>
        <Link to={`/admin`} className="p-1 rounded-[5px] text-white w-40 flex bg-[#4B6BFB] text-[14px] font-bold justify-center items-center gap-1">
          <span>Go To Create Post</span>
          <div 
            className={`w-6 h-6 mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-[#141624]' : 'bg-white'}`}
            style={{
              maskImage: `url(${import.meta.env.BASE_URL}circle-arrow-right-solid-full.svg)`,
              WebkitMaskImage: `url(${import.meta.env.BASE_URL}circle-arrow-right-solid-full.svg)`
            }}
          />
        </Link>
    </div>
    <div className="m-auto w-full max-w-250 px-4 md:px-0">
      <Blogs />
    </div>
    <Footer />
    </div>
  )
}