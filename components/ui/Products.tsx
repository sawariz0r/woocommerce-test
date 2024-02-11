import type {Category, Product} from "@/types/woocommerce";
import Image from "../common/Image";
import Link from "next/link";

type ProductsProps = {
	products: Product[];
};

const parentSlugs = ["men", "accessories", "women"];

export const Products = ({products}: ProductsProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 px-8 gap-x-5 gap-y-8 mt-8">
			{products.map((product, index) => {
				const mainCategorySlug = product.categories.find(c => parentSlugs.includes(c.slug))?.slug;
				const subCategorySlug = product.categories.find(c => c.slug !== mainCategorySlug)?.slug;

				const productImages =
					product.images && product.images.length > 0 ? product.images : [{src: "/no-image.jpg", alt: "No Image"}];
				// TODO: Product-1 and Product-2

				const categorySlugs = product.categories.map(c => c.slug);

				return (
					<Link
						href={`/shop/${categorySlugs.length > 1 ? `${mainCategorySlug}/${subCategorySlug}` : mainCategorySlug}/${
							product.slug
						}`}
						className="group"
						key={index}
					>
						<div className="w-full min-h-[300px] aspect-square flex flex-col">
							<div className="relative flex items-center bg-[#06e5a6] mb-[11px] overflow-hidden">
								<Image
									src={productImages[0].src}
									alt={productImages[0].alt}
									className="aspect-square transition-all duration-300 ease-in-out object-cover h-full group-hover:scale-105"
									width={400}
									height={0}
								/>
							</div>
							<h3 className="text-base font-bold mb-[5px]">{product.name}</h3>
							<p className="">
								{product.sale_price ? (
									<>
										<span className="line-through text-gray-500 mr-2.5">${product.regular_price}</span> $
										{product.sale_price}
									</>
								) : (
									`$${product.price}`
								)}
							</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
