import type {Category, Product} from "@/types/woocommerce";
import Image from "next/image";

type ProductsProps = {
	products: Product[];
};

const parentSlugs = ["men", "accessories", "women"];

export const Products = ({products}: ProductsProps) => {
	return (
		<div className="flex flex-wrap gap-x-5 gap-y-8 mt-8">
			{products.map((product, index) => {
				const mainCategorySlug = product.categories.find(c => parentSlugs.includes(c.slug))?.slug;
				const subCategorySlug = product.categories.find(c => c.slug !== mainCategorySlug)?.slug;

				const productImages =
					product.images && product.images.length > 0 ? product.images : [{src: "/no-image.jpg", alt: "No Image"}];
				// TODO: Product-1 and Product-2
				return (
					<a href={`/shop/${mainCategorySlug}/${subCategorySlug}/${product.slug}`} className="group" key={index}>
						<div className="w-full sm:w-[280px] min-h-[300px] flex flex-col">
							<div className="relative h-[274px] flex items-center bg-[#06e5a6] mb-[11px] overflow-hidden">
								<Image
									src={productImages[0].src}
									alt={productImages[0].alt}
									className="w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out"
									width={280}
									height={0}
								/>
							</div>
							<h3 className="text-base font-bold mb-[5px]">{product.name}</h3>
							<p className="">
								{product.sale_price ? (
									<>
										<span className="line-through text-gray-500 mr-2.5">${product.regular_price}</span> ${product.sale_price}
									</>
								) : (
									`$${product.price}`
								)}
							</p>
						</div>
					</a>
				);
			})}
		</div>
	);
};
