import Usetheme from "../Context/ThemeContext";

export default function Footer() {
  const { theme } = Usetheme();

  return (
    <div className={`flex flex-col mt-20 w-full text-[14px] gap-5 ${theme === 'dark' ? 'bg-[#12131C] text-white' : 'bg-[#F8F9FA] text-black'}`}>
      <div className="flex justify-around mt-3.5 mx-25">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">About</h1>
          <div className="flex-flex-col">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit, sed do</p>
            <p>eiusmod tempor incididunt ut labore </p>
            <p>et dolore magna aliqua. Ut enim ad </p>
            <p>minim veniam</p>
          </div>
          <div className="flex flex-col">
            <p>
              <span className="font-bold">Email</span>
              <span>:tobeadigwe3000@gmail.com</span>
            </p>
            <p>
              <span className="font-bold">Phone</span>
              <span>:07026709859</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Quick Link</h1>
          <div className="flex flex-col">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Archived</p>
            <p>Author</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Category</h1>
          <div className="flex flex-col">
            <p>Lifestyle</p>
            <p>Technology</p>
            <p>Travel</p>
            <p>Business</p>
            <p>Economy</p>
            <p>Sports</p>
          </div>
        </div>
        <div className={`flex flex-col p-3 rounded-[5px] justify-center items-center ${theme === 'dark' ? 'bg-[#242535] text-white' : 'bg-white text-black'}`}>
          <h1 className="font-bold text-[12px]">Weekly Newsletter</h1>
          <p className="opacity-50">Got blog articles and offers via email</p>
          <div className="relative mt-2">
            <span className="absolute inset-y-0 right-4 flex items-center pl-2.5 pointer-events-none">
              <img src="/My-Blog-Website/images/mail.svg" alt="" />
            </span>
            <input type="text" placeholder="Your email" className={`opacity-50 w-42 h-6 border text-[12px] pl-1.75 rounded-[5px] ${theme === 'dark' ? 'bg-[#242535] text-white opacity-50' : 'bg-white text-black opacity-50'}`} />
          </div>
          <button className="mt-1 p-2 rounded-[5px] w-42 bg-[#4B6BFB] text-white">Subscribe</button>
        </div>
      </div>
      <div className="h-px w-238 border text-[#343442] m-auto"></div>
      <div className="flex w-238 m-auto justify-between">
        <div className="flex gap-1">
          <div className={`w-6 h-6 mask-[url(/My-Blog-Website/images/Union.svg)] mask-contain mask-no-repeat ${theme === 'dark' ? 'bg-white' : 'bg-[#141624]'}`} />
          <div className="flex flex-col">
            <p>Meta<span className="font-bold">Blog</span></p>
            <p className="text-[10px] opacity-50">© 2023 MetaBlog. All rights reserved.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  )
}
