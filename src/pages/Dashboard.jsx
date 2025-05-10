import { Body } from "../components/Body";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export function Dashboard() {
	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<Body/>
		</div>
	);
}
