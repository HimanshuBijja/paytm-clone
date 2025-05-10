import { Link } from 'react-router-dom'

export function BottomWarning({label, buttonText, to}){
    return (
        <div>
            {label}
            <Link className="hover:cursor-pointer text-blue-400 underline " to={to}>
                {buttonText}
            </Link>
        </div>
    )
}