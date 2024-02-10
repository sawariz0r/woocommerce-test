export type CategoryPageProps = {params: {category: string}};

export type SubCategoryPageProps = {
	params: {category: string; subcategory: string};
};

export type ProductPageProps = {
	params: {category: string; subcategory: string; "product-slug": string};
};