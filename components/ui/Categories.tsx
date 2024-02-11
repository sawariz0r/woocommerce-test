import {Category} from "@/types/woocommerce";
import Link from "next/link";

type CategoryProps = {
	categories: Category[];
	parentSlug?: string;
};

export const Categories = ({categories, parentSlug}: CategoryProps) => {
	return (
		<div className="w-full justify-center flex gap-x-5">
			{categories.map((category, index) => (
				<Link className="text-xl hover:underline underline-offset-4" href={`/shop/${parentSlug ? parentSlug + "/" : ""}${category.slug}`} key={index}>
					{category.name}
				</Link>
			))}
		</div>
	);
};
