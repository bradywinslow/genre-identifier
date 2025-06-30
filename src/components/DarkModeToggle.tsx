import 'react-toggle/style.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../context/ThemeContext';

export default function DarkModeToggle() {
    const { darkMode, setDarkMode } = useDarkMode();

    const handleDarkMode = () => {
        if (darkMode) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

    return (
        <button onClick={handleDarkMode} className='flex flex-direction-row'>
            {darkMode ? (
                <MdLightMode className='text-yellow-500 pl-[5px] pt-[4px] size-7' />
            ) : (
                <MdDarkMode className='text-gray-500 pl-[5px] pt-[4px] size-7'/>
            )}
        </button>
    )
}
