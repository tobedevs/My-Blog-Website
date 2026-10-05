import useTheme from '../Context/ThemeContext';

export default function Ads({ className = "" }) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center border rounded-[5px] w-full max-w-[488px] h-12.25 text-[#141624] text-[10px] mx-auto px-4 ${theme === 'dark' ? 'bg-[#242535] text-white opacity-50' : 'bg-[#E2E8F0]'}`}>
        <p className="opacity-50">Advertisement</p>    
        <p>You can place ads</p>
        <p className="opacity-50">750*100</p>
    </div>
)
}
