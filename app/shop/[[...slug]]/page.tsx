import {getCategoryBySlug, getParentCategories, getSubCategories} from "@/api/categories";
import {getProductBySlug, getProducts, getProductsByCategory} from "@/api/products";
import {Categories} from "@/components/ui/Categories";
import Nav from "@/components/ui/Nav";
import { Product } from "@/components/ui/Product";
import {Products} from "@/components/ui/Products";
import {Title} from "@/components/ui/Title";
import {CategoryPageProps} from "@/types/next";
import {Category} from "@/types/woocommerce";

export default async function Category({params}: CategoryPageProps) {
	const slugs = params.slug || [];
	const [parentCategory, ...subcategoriesOrProducts] = slugs;

	const parentCategories = await getParentCategories();

	const isProductOrSubCategory = subcategoriesOrProducts.length > 0;

	const lastSlug = subcategoriesOrProducts[subcategoriesOrProducts.length - 1];

	const product = lastSlug && isProductOrSubCategory && (await getProductBySlug(lastSlug));
	const subcategory = lastSlug && isProductOrSubCategory && (await getCategoryBySlug(lastSlug));


	if (parentCategory && !isProductOrSubCategory) {
		const parentCategoryId = parentCategories.find(c => c.slug === parentCategory)?.id;
		return (
			<main className="flex min-h-screen flex-col p-2 sm:p-12">
				<Nav />

				<Title>{parentCategory}</Title>

				<Categories categories={await getSubCategories(parentCategory)} parentSlug={parentCategory} />
				
				<Products products={parentCategoryId ? await getProductsByCategory(parentCategoryId) : []} />
			</main>
		);
	}

	if (subcategory) {
		return (
			<main className="flex min-h-screen flex-col p-2 sm:p-12">
				<Nav />

				<Title>{subcategory.name}</Title>

				<Categories categories={await getSubCategories(subcategory.slug)} parentSlug={parentCategory} />

				<Products products={await getProductsByCategory(subcategory.id)} />
			</main>
		);
	}

	if (product) {
		return (
			<main className="flex min-h-screen flex-col p-2 sm:p-12">
				<Nav />

				<Product product={product} />
			</main>
		);
	}

	// /shop, default
	return (
		<main className="flex min-h-screen flex-col p-2 sm:p-12">
			<Nav />

			<Title>Shop</Title>

			{!parentCategory && <Categories categories={parentCategories} />}
			{parentCategory && !isProductOrSubCategory && (
				<Categories categories={await getSubCategories(parentCategory)} parentSlug={parentCategory} />
			)}

			<Products products={await getProducts()} />
		</main>
	);
}
