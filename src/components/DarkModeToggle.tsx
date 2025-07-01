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
                <MdLightMode className='text-yellow-500 size-7'/>
            ) : (
                <MdDarkMode className='text-gray-500 size-7'/>
            )}
        </button>
    )
}
