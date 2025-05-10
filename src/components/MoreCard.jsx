import cashWonImg from "../images/cashWon.png";
import cashbackImg from "../images/cashback.png";
import coinsImg from "../images/coins.png";
import spinImg from "../images/spin.png";
import couponsImg from "../images/coupons.png";
import othersImg from "../images/others.png";

export function MoreCard({ img, label }) {
	return (
		<div className="col-span-1 w-full h-full">
			<div className=" w-full h-full bg-slate-200 p-2 rounded-3xl grid grid-cols-3 grid-rows-2 gap-3 overflow-hidden">
				<MoreCardChild label={"Cash Won"}  img={cashWonImg}/>
				<MoreCardChild label={"Cashback"} img={cashbackImg}/>
				<MoreCardChild label={"Coins"} img={coinsImg}/>
				<MoreCardChild label={"Spin& Win"}  img={spinImg}/>
				<MoreCardChild label={"Coupons"} img={couponsImg}/>
				<OthersChild label={"Others"} img={othersImg}/>
			</div>
		</div>
	);
}

function MoreCardChild({ label, img }) {
	return (
		<div className=" relative text-center flex flex-col justify-end text-sm ">
			<div className=" h-[67%] w-[67%] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-baseline-last overflow-hidden">
				<img className="w-[80%] h-[80%]" src={img} alt="" />
			</div>
			{label}
		</div>
	);
}
function OthersChild({ label, img }) {
	return (
		<div className=" relative text-center flex flex-col justify-end text-sm ">
			<div className=" h-[67%] w-[67%] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-baseline-last overflow-hidden">
				<img className="w-[70%] h-[70%]" src={img} alt="" />
			</div>
			{label}
		</div>
	);
}
