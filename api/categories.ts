import {Category} from "@/types/woocommerce";
import {api} from "./api";

export const getCategories = async () => {
	const {data} = await api.get("products/categories");
	return data as Category[];
};

export const getParentCategories = async () => {
	const {data} = await api.get("products/categories", {parent: 0, exclude: 15});
	return data as Category[];
};

export const getCategoryById = async (id: number) => {
	const {data} = await api.get(`products/categories/${id}`);
	return data as Category;
};

export const getCategoryBySlug = async (slug: string) => {
	const {data} = await api.get("products/categories", {slug});
	// TODO: Not safe
	return data[0] as Category;
};

export const getSubCategories = async (parentSlug: string) => {
	const parentCategory = await getCategoryBySlug(parentSlug);
	const {data} = await api.get("products/categories", {
		parent: parentCategory.id,
	});
	return data as Category[];
};
