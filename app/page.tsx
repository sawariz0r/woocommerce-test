import {getParentCategories} from "@/api/categories";
import {getProducts} from "@/api/products";
import {Categories} from "@/components/ui/Categories";
import Nav from "@/components/ui/Nav";
import {Products} from "@/components/ui/Products";
import {Title} from "@/components/ui/Title";

export default async function Home() {
	const products = await getProducts();
	const categories = await getParentCategories();

	return (
		<main className="flex min-h-screen flex-col items-center gap-y-8 p-24">
			<Nav />
			
			<Title>Shop</Title>

			<Categories categories={categories} />

			<Products products={products} />
		</main>
	);
}
