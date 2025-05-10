import mobileRechargeImg from "../images/mobileRecharge.png";
import electricityImg from "../images/electricity.png";
import creditCardImg from "../images/creditCard.png";
import fastagImg from "../images/fastag.png";
import billsImg from "../images/bills.png";
import { Card } from "../components/Card";

export function RechargeCard() {
	return (
		<div className="grid grid-cols-5 gap-3 h-full w-full ">
			<MiniCard label={"All Bill Payments"} img={billsImg} />
			<MiniCard label={"Mobile Recharge"} img={mobileRechargeImg} />
			<MiniCard label={"Electricity Bill"} img={electricityImg} />
			<MiniCard label={"FASTag Recharge"} img={fastagImg} />
			<MiniCard label={"Credit Card"} img={creditCardImg} />
		</div>
	);
}

function MiniCard({ label, img }) {
	return (
		<div className="bg-slate-200 rounded-3xl flex items-baseline-last justify-center relative px-[28%]">
			<img
				className="w-[36%] h-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[85%]"
				src={img}
				alt=""
			/>
			<div className=" h-[25%] w-full border-t-1 mb-2 font-medium text-sm text-center flex items-center">
				{label}
			</div>
		</div>
	);
}
