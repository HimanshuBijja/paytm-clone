import { Searchbar } from "./Searchbar";

export function Navbar() {
	return (
		<nav className="border-b-1 p-2 m-2 mb-10 grid grid-cols-8">
			<div className="col-span-5 flex gap-10 items-baseline">
				<span className="text-3xl font-bold">
					<span className="text-paytm-100">Pay</span>
					<span className="text-paytm-400">tm</span>
				</span>
				<span>Home</span>
				<span>Bank</span>
				<span>Recharge</span>
				<span>Check balance</span>
				<span>History</span>
			</div>

			<div className="col-span-3 flex justify-center">
				<Searchbar placeholder={"Search"} />
			</div>
		</nav>
	);
}
