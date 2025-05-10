export function InputBox({label, placeholder}){
    return (
        <div className="m-1">
            <div className="text-start px-3 mb-1 font-semibold">

            {label}
            </div>
            <input className="border-2 rounded-2xl w-full py-2 px-4 font-medium" type="text" placeholder={placeholder} />
        </div>
    )
}