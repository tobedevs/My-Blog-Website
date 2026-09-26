import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from 'react-toastify';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import useTheme from "../Context/ThemeContext";

const Admin = () => {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();


  // State for managing blocks instead of a single string
const [contentBlocks, setContentBlocks] = useState([
  { type: 'paragraph', text: '' }
]);

const addBlock = (type) => {
  setContentBlocks([...contentBlocks, { type, text: '' }]);
};

const handleBlockChange = (index, value) => {
  const updated = [...contentBlocks];
  updated[index].text = value;
  setContentBlocks(updated);
};

const removeBlock = (index) => {
  if (contentBlocks.length === 1) return; // Keep at least one block
  setContentBlocks(contentBlocks.filter((_, i) => i !== index));
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !Category || !post || !image || !description) {
    toast.error("Please fill in all fields.");
    return;
  }

  const createBlogPromise = async () => {
    // Cloudinary Upload
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Blog_site_images");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/av3veuwn/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

if (!response.ok) {
  console.error("Cloudinary error:", data);
  throw new Error(data.error?.message || "Failed to upload image to Cloudinary");
}

    // Save blog to Firestore
    await addDoc(collection(db, "blogs"), {
      name,
      image: data.secure_url,
      description,
      Category,
      content: contentBlocks,
      post: post.split(",").map((item) => item.trim())
    });
  };

  try {
    setLoading(true);

    await toast.promise(createBlogPromise(), {
      pending: "⏳ Uploading image and creating blog...",
      success: "🎉 Blog added successfully!",
      error: "❌ Something went wrong.",
    });

    setName("");
    setImage(null);
    setDescription("");
    setCategory("");
    setPost("");

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }


  
};

  return (
    <div className={`${theme === 'dark' ? 'bg-[#12131C]' : 'bg-gray-50'}`}>
    <Navbar />
    <div className="min-h-screen px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Add a new blog
          </h1>
          <p className={`mt-2 text-sm text-gray-500 `}>
            Create and publish a new article to your blog.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl p-6 shadow-sm"
        >
          <div className={`mb-5 ${theme === 'dark' ? 'text-white placeholder:[#E5E7EB]' : 'text-gray-700 placeholder:[#D1D5DB]'}`}>
            <label className={`mb-2 block text-sm font-medium `}>
              Author's name
            </label>
            <input
              type="text"
              placeholder="Enter Author's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          <div className={`mb-5 ${theme === 'dark' ? 'text-white placeholder:[#E5E7EB]' : 'text-gray-700 placeholder:[#D1D5DB]'}`}>
            <label className={`mb-2 block text-sm font-medium`}>
              Blog Category
            </label>
            <input
              type="text"
              placeholder="e.g technology, business,sports,lifestyle, etc"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          <div className="{`mb-5 ${theme === 'dark' ? 'text-white placeholder:[#E5E7EB]' : 'text-gray-700 placeholder:[#D1D5DB]'}`}">
            <label className={`mb-2 block text-sm font-medium`}>
              Blog Description
            </label>
            <input
              type="text"
              placeholder="Enter blog Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
            />
          </div>

          <div className={`mb-5 ${theme === 'dark' ? 'text-white placeholder:[#E5E7EB]' : 'text-gray-700 placeholder:[#D1D5DB]'}`}>
            <label className={`mb-2 block text-sm font-medium`}>
              Blog image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full cursor-pointer rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600"
            />
          </div>

          {/* Dynamic Content Blocks Section */}
          <div className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
            <label className={`mb-2 block text-sm font-medium`}>
              Blog post content sections
            </label>
            
            <div className="flex flex-col gap-4">
              {contentBlocks.map((block, index) => (
                <div key={index} className={`flex gap-2 items-start p-3 border rounded-lg transition-colors ${theme === 'dark' ? 'border-slate-800 bg-[#181A2A]' : 'border-gray-100 bg-gray-50/50'}`}>
  <div className="flex-1">
    <div className="flex justify-between items-center mb-1">
      <span className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
        {block.type === 'header' ? 'Section Header' : 'Paragraph'}
      </span>
    </div>

    {block.type === 'header' ? (
      <input
        type="text"
        placeholder="Enter section header..."
        value={block.text}
        onChange={(e) => handleBlockChange(index, e.target.value)}
        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
          theme === 'dark'
            ? 'bg-[#202336] border-slate-700 text-[#E2E8F0] placeholder-slate-500 focus:border-slate-500'
            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
        }`}
      />
    ) : (
      <textarea
        placeholder="Write paragraph text..."
        value={block.text}
        onChange={(e) => handleBlockChange(index, e.target.value)}
        rows="3"
        className={`w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none transition ${
          theme === 'dark'
            ? 'bg-[#202336] border-slate-700 text-[#E2E8F0] placeholder-slate-500 focus:border-slate-500'
            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gray-400'
        }`}
      />
    )}
  </div>

  <button
    type="button"
    onClick={() => removeBlock(index)}
    className={`mt-6 font-bold px-2 py-1 transition-colors ${
      theme === 'dark' ? 'text-slate-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'
    }`}
    title="Remove block"
  >
    ✕
  </button>
</div>
              ))}
            </div>

            {/* Buttons to add new blocks */}
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                onClick={() => addBlock('paragraph')}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                + Add Paragraph
              </button>
              <button
                type="button"
                onClick={() => addBlock('header')}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                + Add Header
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Adding blog..." : "Add blog"}
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Admin;