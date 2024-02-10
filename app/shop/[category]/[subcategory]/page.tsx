import {getCategoryBySlug} from "@/api/categories";
import {getProductsByCategory} from "@/api/products";
import {SubCategoryPageProps} from "@/types/next";
import Image from "next/image";

export default async function SubCategory({params}: SubCategoryPageProps) {
	const category = await getCategoryBySlug(params.subcategory);
	const products = await getProductsByCategory(category.id);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{params.subcategory}</h1>

			{products.map((product, index) => {
				const mainCategorySlug = params.category;
				const subCategorySlug = product.categories.filter(
					c => c.slug !== mainCategorySlug
				)[0].slug;

				return (
					<a
						href={`/shop/${mainCategorySlug}/${subCategorySlug}/${product.slug}`}
						key={index}
					>
						*{product.name}
					</a>
				);
			})}
		</main>
	);
}
