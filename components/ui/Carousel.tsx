"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/types/woocommerce";
import Image from "../common/Image";

type EmblaCarouselProps = {
    images: Product["images"];
};

export default function EmblaCarousel(props: EmblaCarouselProps) {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className="embla overflow-hidden" ref={emblaRef}>
			<div className="embla__container flex">
                {props.images?.map((image, index) => (
                    <div key={index} className="embla__slide h-full aspect-square overflow-hidden relative">
                        <Image src={image.src} fill alt={image.alt} className="object-cover" />
                    </div>
                ))}
			</div>
		</div>
	);
}
