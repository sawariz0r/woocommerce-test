import {getCategoryBySlug} from "@/api/categories";
import {getProductBySlug} from "@/api/products";
import {ProductPageProps} from "@/types/next";
import Image from "next/image";

export default async function Product(props: ProductPageProps) {
	const product = await getProductBySlug(props.params["product-slug"]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{product.name}</h1>
		</main>
	);
}
