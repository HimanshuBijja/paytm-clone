import scanAndPayImg from "../images/scanAndPay.png";
import toMobileImg from "../images/toMobile.png";
import toBankImg from "../images/toBank.png";
import toSelfImg from "../images/toSelf.png";
import receiveMoneyImg from "../images/receiveMoney.png";
import alertsImg from "../images/alerts.png";
import allServicesImg from "../images/allServices.png";
import balanceAndHistoryImg from "../images/balanceAndHistory.png";

export function MoneyTransferCard() {
	return (
		<div className="w-full h-full bg-slate-200 rounded-3xl grid grid-cols-4 grid-rows-2 gap-3 p-4 items-center">
			<ChildCard img={scanAndPayImg} label={"Scan"}/>
			<ChildCard img={toMobileImg} label={"To Mobile"}/>
			<ChildCard img={toBankImg}label={"To Bank A/c"} />
			<ChildCard img={toSelfImg} label={"To Self A/c"}/>
			<ChildCard1 img={balanceAndHistoryImg} label={"History"}/>
			<ChildCard1 img={receiveMoneyImg} label={"Recieve Money"}/>
			<ChildCard1 img={alertsImg} label={"Alerts"}/>
			<ChildCard1 img={allServicesImg} label={"All Service"} />
		</div>
	);
}

function ChildCard({ label, img }) {
	return (
		<div className="h-full w-full">
			<div className="w-[54%] h-[68%] bg-paytm-200 relative rounded-full justify-self-center hover:w-[58%] hover:h-[72%]  hover:shadow-2xl hover:shadow-slate-400 hover:cursor-pointer">
				<img
					className="absolute h-[50%] w-[50%] top-1/2 left-1/2 transform -translate-1/2"
					src={img}
					alt=""
				/>
			</div>
			<div className=" pt-2  font-medium text-center text-sm">
				{label}
			</div>
		</div>
	);
}
function ChildCard1({ label, img }) {
	return (
		<div className="h-full w-full">
			<div className="w-[54%] h-[68%] bg-paytm-300 relative rounded-full justify-self-center hover:w-[58%] hover:h-[72%] hover:shadow-2xl hover:shadow-slate-400 hover:cursor-pointer">
				<img
					className="absolute h-[50%] w-[50%] top-1/2 left-1/2 transform -translate-1/2"
					src={img}
					alt=""
				/>
			</div>
			<div className=" pt-2 font-medium text-center text-sm">
				{label}
			</div>
		</div>
	);
}
