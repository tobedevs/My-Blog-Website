import useTheme from '../Context/ThemeContext';

export default function Ads({ className }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} ${className}`}>
        <p className="opacity-50">Advertisement</p>    
        <p>You can place ads</p>
        <p className="opacity-50">750*100</p>
    </div>
)
}
