export function Searchbar({placeholder}){
    return (
        <div className="relative w-2/3">

            <input className="bg-gray-50 border border-gray-300 rounded-xl w-full py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-10" type="text" placeholder={placeholder} />
            <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
        </div>
    )
}