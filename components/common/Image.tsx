"use client";
import NextImage from "next/image";
import {useState} from "react";

// Extend NextImage props
interface ImageProps extends React.ComponentProps<typeof NextImage> {}

export default function Image(props: ImageProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<NextImage
			{...props}
			onLoad={() => setLoaded(true)}
			className={`${props.className} transition-opacity duration-200 ease-in-out ${loaded ? "" : "opacity-0"}`}
		/>
	);
}
