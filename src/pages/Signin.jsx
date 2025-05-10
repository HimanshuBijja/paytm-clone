import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning} from "../components/BottomWarning";
import { Link } from "react-router-dom"

export function Signin() {
	return (
		<Background>
			<div className=" pt-6 pb-10 flex flex-col gap-3">
				<Heading label={"Sign in"} />
				<SubHeading label={"Enter details to Login"} />
			</div>
			<InputBox label={"Username"} placeholder={"abc@gmail.com"} />
			<InputBox label={"Password"} placeholder={"Xyz"} />
			<div className="px-1 mt-4 mb-2">
			<Link to={"/dashboard"}>
				<Button label={"Sign in"}/>
			</Link>
			</div>
            <BottomWarning label={"Dont have an account?  "} buttonText={"Sign up"} to={"/signup"}/>
		</Background>
	);
}
