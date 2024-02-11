import React, {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	size?: "sm" | "md" | "lg"; // TODO: In case we need to add more sizes
}

export default function Button(props: ButtonProps) {
	const {children, variant = "primary", size = "md", ...rest} = props;
	return (
		<button className=" px-[30px] py-[15px] bg-black text-white uppercase" {...rest}>
			{children}
		</button>
	);
}
