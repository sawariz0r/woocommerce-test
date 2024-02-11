import React from "react";

export const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<div className="w-full flex justify-center">
			<h1 className="text-4xl font-normal mb-8 capitalize">{children}</h1>
		</div>
	);
};
