import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning} from "../components/BottomWarning";

export function Signup() {
	return (
		<Background>
			<div className=" pt-6 pb-10 flex flex-col gap-3">
				<Heading label={"Sign up"} />
				<SubHeading label={"Enter details to create an account"} />
			</div>
			<InputBox label={"Username"} placeholder={"abc@gmail.com"} />
			<InputBox label={"Password"} placeholder={"Xyz"} />
			<InputBox label={"Firstname"} placeholder={"Max"} />
			<InputBox label={"Lastname"} placeholder={"Verstappen"} />
			<div className="px-1 mt-4 mb-2">
				<Button label={"Sign up"} />
			</div>
            <BottomWarning label={"Already have an account?  "} buttonText={"Sign in"} to={"/signin"}/>
		</Background>
	);
}
