export function Card({label}){
    return (
        <div className="pb-3 px-10 w-full h-full bg-slate-200 rounded-3xl text-center font-medium text-sm flex items-baseline-last justify-center">
            <div className=" px-[20%] border-t-1 pt-2">

            {label}
            </div>
        </div>
    )
}