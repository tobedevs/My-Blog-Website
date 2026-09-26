import { useFetchedBlogs } from "../Context/FetchBlogContext";
import { Link } from "react-router-dom";
import useTheme from '../Context/ThemeContext';

export default function Blogs() {
  const { Blogs } = useFetchedBlogs();
  const { theme } = useTheme();
  console.log("BLOGS:", Blogs);

  return (
    <div className="grid grid-cols-3 gap-4">
      {Blogs?.map((blog) => (
        <Link key={blog.firebaseId} to={`/blog/${blog.firebaseId}`} className={`block rounded-lg border p-4 transition hover:shadow-lg ${theme === 'dark' ? 'border-gray-800 bg-[#181A2A]' : 'border-gray-200 bg-white'}`}>
          <img src={blog.image} alt={blog.name} />
          <p className={`text-small my-2 text-blue-800 rounded-lg w-25 text-center ${theme === 'dark' ? 'bg-[#4B6BFB]' : 'bg-gray-200'}`}>{blog.Category}</p>
          <p className={`font-bold text-[20px] mb-3.5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{blog.description}</p>
          <div className="flex gap-2 text-[10px]">
            <img src="/Image.svg" className="w-6 h-6 rounded-full" />
            <p className="text-gray-500 opacity-50">{blog.name}</p>
            <p className="text-gray-500 opacity-50">August 20, 2022</p>
          </div>
        </Link>
      ))}
    </div>
  );
}