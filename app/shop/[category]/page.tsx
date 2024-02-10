import {getCategoryBySlug, getSubCategories} from "@/api/categories";
import {getProductsByCategory} from "@/api/products";
import {CategoryPageProps} from "@/types/next";
import {NextPage} from "next";

export default async function Category({params}: CategoryPageProps) {
	const category = await getCategoryBySlug(params.category);
	const subcategories = await getSubCategories(params.category);
	const products = await getProductsByCategory(category.id);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{params.category}</h1>

			{subcategories.map((subcategory, index) => (
				<a href={`/shop/${params.category}/${subcategory.slug}`} key={index}>
					{subcategory.name}
				</a>
			))}

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
