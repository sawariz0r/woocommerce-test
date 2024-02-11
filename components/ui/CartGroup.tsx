"use client";

import {Product} from "@/types/woocommerce";
import Button from "../common/Button";
import QuantityCounter from "./QuantityCounter";
import {useState} from "react";
import toast from "react-hot-toast";
import { addToCart } from "@/api/cart";

type AddToCartGroupProps = {
	product: Product;
};

export function AddToCartGroup(props: AddToCartGroupProps) {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		setQuantity(quantity - 1);
	};

	const handleAddToCart = async () => {
		const result = await addToCart(props.product.id, quantity);
		if (!result) return;
		setQuantity(1);
		toast.success(`Added to Cart:\n${quantity}x ${props.product.name}`);
	};

	return (
		<div className="flex">
			<QuantityCounter value={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
			<Button onClick={handleAddToCart}>Add to Cart</Button>
		</div>
	);
}
