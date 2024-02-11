import type {Category, Product as TProduct} from "@/types/woocommerce";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import Richtext from "../common/Richtext";
import Price from "./Price";
import Button from "../common/Button";
import QuantityCounter from "./QuantityCounter";
import {AddToCartGroup} from "./CartGroup";
import EmblaCarousel from "./Carousel";

type ProductProps = {
	product: TProduct;
};

export const Product = ({product}: ProductProps) => {
	return (
		<div className="flex gap-x-24 py-8 items-center flex-col sm:flex-row max-w-[100vw] overflow-hidden">
			<div className="md:w-1/2 flex justify-center">
				<div className="h-[580px] aspect-square">
					<EmblaCarousel images={product.images} />
				</div>
			</div>

			<div className=" md:w-1/2 flex flex-col gap-y-6 pt-2">
				<Breadcrumbs />

				<h2 className="font-bold text-2xl leading-[29px]">{product.name}</h2>

				<Price product={product} />

				<Richtext html={product.short_description} />

				<AddToCartGroup product={product} />
			</div>
		</div>
	);
};
