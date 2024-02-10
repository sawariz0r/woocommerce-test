import {getParentCategories} from "@/api/categories";
import {getProducts} from "@/api/products";
import Image from "next/image";

export default async function Home() {
	const products = await getProducts();
	const categories = await getParentCategories();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Shop</h1>

			{categories.map((category, index) => (
				<a href={`/shop/${category.slug}`} key={index}>
					{category.name}
				</a>
			))}

			{products.map((product, index) => (
				<a href={`/shop/${product.categories.map}`} key={index}>
					*{product.name}
				</a>
			))}
		</main>
	);
}
