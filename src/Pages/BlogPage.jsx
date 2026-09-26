import { useParams } from "react-router-dom";
import { useFetchedBlogs } from "../Context/FetchBlogContext";
import { toast } from "react-toastify";
import Navbar from '../Component/Navbar';
import useTheme from '../Context/ThemeContext';
import Footer from "../Component/Footer";

export default function BlogPage() {
  const { id } = useParams();
  const { Blogs } = useFetchedBlogs();
  const { theme } = useTheme();

  const blog = Blogs?.find((blog) => blog.firebaseId === id);

  if (!blog) {
    toast.error("Blog not found");
    return null;
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
      <Navbar />
      <div className={`flex flex-col items-center min-h-screen ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
        <div className="flex flex-col w-150">
          <p className={`text-small my-3 text-blue-800 rounded-lg w-25 text-center ${theme === 'dark' ? 'bg-[#4B6BFB]' : 'bg-gray-200'}`}>{blog.Category}</p>
          <p className={`font-bold text-[26px] mb-0.5 w-145 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{blog.description}</p>
          <div className="flex gap-2 my-2.5">
            <img src="/Image.svg" className="w-6 h-6 rounded-full" />
            <p className="text-gray-500 opacity-50">{blog.name}</p>
            <p className="text-gray-500 opacity-50">August 20, 2022</p>
          </div>
          <img src={blog.image} alt={blog.name} />
          
          {/* Dynamic Content Blocks Mapping */}
          <div className="flex flex-col gap-5">
            {blog.content?.map((block, index) => {
              if (block.type === 'header') {
                return (
                  <h1 key={index} className={`font-bold text-[19px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {block.text}
                  </h1>
                );
              }
              return (
                <p key={index} className={`${theme === 'dark' ? 'text-gray-500' : 'text-black'}`}>
                  {block.text}
                </p>
              );
            })}
          </div>
        </div> 
      </div>
      <Footer />
    </div>
  ); 
};