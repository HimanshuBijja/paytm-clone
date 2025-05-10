import walletImg from "../images/wallet.png";
import visaImg from "../images/visa.png";
import bankImg from "../images/bank.png";
import upiCircleImg from "../images/upiCircle.png";
import internationalImg from "../images/international.png";

export function ManagePaymentsCard({ label }) {
	return (
		<div className="w-full h-full bg-slate-200 overflow-hidden rounded-3xl flex flex-col">
			<div className="pt-3 pl-8 pb-2 mb-3 border-b-1 bg-paytm-100">{label}</div>
			<div className=" flex-1 grid grid-cols-5 gap-3">
				<RenderImg img={walletImg} label={"Wallet"} />
				<RenderImg img={bankImg} label={"Bank"} />
				<RenderImg img={upiCircleImg} label={"UPI Circle"} />
				<RenderImg img={visaImg} label={"Visa"} />
				<RenderImg img={internationalImg} label={"International"} />
			</div>
			<div className=" py-3 pl-7 mt-3 border-t-1 relative ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="size-5 absolute top-1/2 transform -translate-y-1/2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1"
					stroke="currentColor"
					className="size-5 absolute right-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>

				<div className="pl-8 text-sm">himanshubijja@gmail.com</div>
			</div>
		</div>
	);
}

function RenderImg({ img, label }) {
	return (
		<div className="col-span-1 ">
			<div className="h-[80%] flex justify-center items-center">
				<div className="h-[80%] w-[90%]  flex justify-center">
					<div className=" bg-slate-100 aspect-square rounded-full relative ">
						<img
							className="h-13 w-13 absolute top-1/2 left-1/2 transform -translate-y-[50%] -translate-x-1/2"
							src={img}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="h-[20%] text-center">{label}</div>
		</div>
	);
}
