import { Link } from "react-router";

type HeaderProps = {
    className?: string;
};

export default function Header({ className }: HeaderProps) {
    return (
        <h1 className={className}>
            <div className='text-center'>
                <Link to='/'>Genre Identifier</Link>
            </div>
        </h1>    
    )
}
