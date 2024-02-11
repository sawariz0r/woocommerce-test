import {Product} from "@/types/woocommerce";
import {api} from "./api";

const defaultParams = {
	// Lyckas inte få till att exkludera produkter som inte är "purchasable",
	// TODO: Se till att exkludera produkter som inte är "purchasable"
	exclude: [540, 541]
};

export const getProducts = async () => {
	const {data} = await api.get("products", defaultParams);
	// TODO: Add zod validation for example
	return data as Product[];
};

export const getProductById = async (id: number) => {
	const {data} = await api.get(`products/${id}`, defaultParams);
	return data as Product;
};

export const getManyProductsById = async (ids: number[]) => {
	const {data} = await api.get("products", {...defaultParams, include: ids});
	return data as Product[];
};

export const getProductBySlug = async (slug: string) => {
	const {data} = await api.get("products", {...defaultParams, slug});
	return data[0] as Product;
};

export const getProductsByCategory = async (categoryId: number) => {
	const {data} = await api.get("products", {...defaultParams, category: categoryId});
	return data as Product[];
};
