import { Link } from "react-router";

type HeaderProps = {
    className?: string;
};

export default function Header({ className }: HeaderProps) {
    return (
        <h1 className={className}>
            <div className='text-center mt-6'>
                <Link to='/'>Genre Identifier</Link>
            </div>
        </h1>    
    )
}
