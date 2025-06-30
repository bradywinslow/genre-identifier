import { Link } from 'react-router';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Header() {
    return (
        <div className='flex flex-row gap-5 justify-center items-center mx-6 gap-x-2'>
            <h1>
                <div className='text-center text-[45px]'>
                    <Link to='/'>Genre Identifier</Link>
                </div>
            </h1>
            <div>
                <DarkModeToggle />
            </div>            
        </div>
    )
}
