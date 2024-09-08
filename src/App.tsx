import { useState } from "react";
import { buttons } from "./Constants";

export function App() {
	const [value, setValue] = useState("");
	const valueLength = value.length;

	const fontSize = () => {
		if (valueLength < 10) return "text-6xl";
		if (valueLength < 15) return "text-4xl";
		if (valueLength < 20) return "text-2xl";
		if (valueLength < 25) return "text-xl";
		if (valueLength < 30) return "text-lg";

		return "text-md";
	};

	const calculate = () => {
		try {
			setValue(eval(value.replace(/÷/g, "/").replace(/×/g, "*")).toString());
		} catch (error) {
			setValue("Error");
		}
	};

	const handleButton = (button: string) => {
		switch (button) {
			case "CE":
				return setValue("");
			case "C":
				return setValue(value.slice(0, -1));
			case "=":
				return calculate();
			case "%":
				return setValue((Number(value) / 100).toString());
			case "√":
				return setValue(parseFloat(Math.sqrt(Number(value)).toFixed(6)).toString());
			default:
				return setValue(value + button);
		}
	};

	return (
		<main className="flex h-screen w-screen items-center justify-center bg-lightBlue">
			<div className="h-[650px] w-[450px] rounded-[50px] bg-white p-10 shadow-2xl">
				<div
					className={`mb-4 flex h-20 items-center justify-end overflow-hidden rounded-full bg-blue px-6 font-bold text-white ${fontSize()}`}
				>
					{value}
				</div>

				<div className="grid grid-cols-4 gap-4">
					{buttons.map((button, index) => (
						<div
							key={index}
							className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-full text-4xl font-bold shadow-md ${button.className}`}
							onClick={() => handleButton(button.value)}
						>
							{button.value}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
