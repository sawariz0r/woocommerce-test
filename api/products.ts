import {Product} from "@/types/woocommerce";
import {api} from "./api";

export const getProducts = async () => {
	const {data} = await api.get("products");
	// TODO: Add zod validation for example
	return data as Product[];
};

export const getProductById = async (id: number) => {
	const {data} = await api.get(`products/${id}`);
	return data as Product;
};

export const getManyProductsById = async (ids: number[]) => {
	const {data} = await api.get("products", {include: ids});
	return data as Product[];
}

export const getProductBySlug = async (slug: string) => {
	const {data} = await api.get("products", {slug});
	return data[0] as Product;
};

export const getProductsByCategory = async (categoryId: number) => {
	const {data} = await api.get("products", {category: categoryId});
	return data as Product[];
};
