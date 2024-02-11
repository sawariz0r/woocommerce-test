/* eslint-disable @next/next/no-img-element */
import {getCart} from "@/api/cart";
import {getManyProductsById} from "@/api/products";
import Nav from "@/components/ui/Nav";

export const dynamic = "force-dynamic";

export default async function Cart() {
	const cart = await getCart();
	const productIds = cart.map(item => item.id);
	const products = await getManyProductsById(productIds);

	return (
		<main className="flex min-h-screen flex-col items-center p-4 md:p-12">
			<Nav canGoBack />
			<div className="flex w-full justify-start">
				<h1 className="text-2xl capitalize font-bold">Cart</h1>
			</div>
			{cart.length === 0 && (
				<div className="flex w-full justify-center mt-20">
					<p className="text-2xl">Your cart is empty</p>
				</div>
			)}
			{cart.length > 0 && (
				<table className="table-auto w-full mt-20">
					<thead className="bg-[#F6F6F6] h-12">
						<tr className="text-left">
							<th>&nbsp;</th>
							<th className="font-normal">Product</th>
							<th className="font-normal">Price</th>
							<th className="font-normal">Quantity</th>
							<th className="font-normal">Total</th>
						</tr>
					</thead>
					<tbody>
						{cart.map(item => {
							const product = products.find(p => p.id === item.id);
							if (!product) return null;
							return (
								<tr key={item.id}>
									<td>
										{product.images && product?.images.length > 0 && product.images[0].src ? (
											<img src={product.images[0].src} alt={product?.name} className="w-32 h-32" />
										) : null}
									</td>
									<td>{product?.name}</td>
									<td>${product?.price}</td>
									<td>{item.quantity}</td>
									<td>${product?.price && Number(product.price) * item.quantity}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</main>
	);
}
