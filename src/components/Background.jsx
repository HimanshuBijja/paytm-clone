
export function Background({children}) {
    return (
        <div className="bg-slate-400 h-screen flex justify-center items-center">
            <div className=" w-full max-w-sm h-max bg-white rounded-3xl p-4 text-center">

            {children}
            </div>
        </div>
    );
}
