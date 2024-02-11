import {CartItem} from "@/types/next";

export const url = "http://localhost:3000/api";

export const getCart = async () => {
	const response = await fetch(`${url}/cart`, {
		next: {
			revalidate: 0,
		},
	});
	return (await response.json()) as CartItem[];
};

export const addToCart = async (id: number, quantity: number) => {
	const response = await fetch(`${url}/cart`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({id, quantity}),
	});
	return (await response.json()) as CartItem[];
};

export const removeFromCart = async (id: number) => {
	const response = await fetch(`${url}/cart`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({id}),
	});
	return (await response.json()) as CartItem[];
};
