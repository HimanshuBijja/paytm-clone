import { Card } from "./Card";
import { Link } from "react-router-dom";
import loansImg from "../images/loans.png";
import rewardImg from "../images/reward.png";
import refAndEarnImg from "../images/refAndEarn.png";
import bullImg from "../images/bull.png";
import bearImg from "../images/bear.png";
import { StocksCard } from "../dashboardComponents/StockCard";
import { MoneyTransferCard } from "../dashboardComponents/MoneyTransferCard";
import { RechargeCard } from "../dashboardComponents/RechargeCard";
import { ManagePaymentsCard } from "../dashboardComponents/ManagePaymentsCard";
import { PillsCard } from "./PillsCard";
import { MoreCard } from "./MoreCard";

export function Body() {
	return (
		<div className="flex-1 px-[7vw] pb-[2vh] h-full grid grid-cols-4 grid-rows-3 items-center gap-4">
			<div className="h-full w-full col-span-4 grid grid-cols-8 gap-3">
				<div className="h-full w-full col-span-3 relative ">
					<MoneyTransferCard/>
				</div>
				<div className="col-span-5 h-full w-full gap-3">
					<RechargeCard />
				</div>
			</div>
			<div className="h-full w-full row-span-2">
				<StocksCard bullImg={bullImg} bearImg={bearImg} />
			</div>
			<div className="col-span-2 row-span-2 h-full w-full grid grid-rows-10 gap-3">
				<div className="row-span-5">
					<ManagePaymentsCard label={"Manage Payments"} />
				</div>
				<div className="row-span-5 grid grid-cols-2 gap-3">
					<RewardsCard label={"Rewards"} img={rewardImg} />
					{/* <RewardsCard label={"Refer and Earn"} img={refAndEarnImg} /> */}
					<MoreCard />
				</div>
			</div>
			<div className="row-span-2 h-full w-full">
				<PillsCard />
			</div>
		</div>
	);
}

function RewardsCard({ img, label }) {
	return (
		<div className="col-span-1 relative w-full h-full">
			<Card label={label} />
			<img
				className="w-[28%] h-[42%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[65%] "
				src={img}
				alt=""
			/>
		</div>
	);
}

