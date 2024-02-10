import {NextRequest} from "next/server";

type CartItem = {
	id: number;
	quantity: number;
};

// TODO: Replace with session or a cookie
const cart: CartItem[] = [];

export async function GET(request: NextRequest) {
	return cart;
}

export async function POST(request: NextRequest) {
	const {id, quantity} = await request.json();
	const index = cart.findIndex(item => item.id === id);
	if (index === -1) {
		cart.push({id, quantity});
	} else {
		cart[index].quantity += quantity;
	}
	return cart;
}

export async function DELETE(request: NextRequest) {
	const {id} = await request.json();
	const index = cart.findIndex(item => item.id === id);
	if (index !== -1) {
		cart.splice(index, 1);
	}
	return cart;
}
