import {Product} from "@/types/woocommerce";

type PriceProps = {
	product: Product;
};

export default function Price({product}: PriceProps) {
	return (
		<p>
			{product.sale_price ? (
				<>
					<span className="line-through text-gray-500 mr-2.5">${product.regular_price}</span> ${product.sale_price}
				</>
			) : (
				`$${product.price}`
			)}
		</p>
	);
}
