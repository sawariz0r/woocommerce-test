import {CartItem} from "@/types/next";
import {NextRequest, NextResponse} from "next/server";

const cart: CartItem[] = [];

export async function GET(request: NextRequest) {
	console.log("cart", cart);
	return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
	const {id, quantity} = await request.json();
	const index = cart.findIndex(item => item.id === id);
	if (index === -1) {
		cart.push({id, quantity});
	} else {
		cart[index].quantity += quantity;
	}
	return NextResponse.json(cart);
}

export async function DELETE(request: NextRequest) {
	const {id} = await request.json();
	const index = cart.findIndex(item => item.id === id);
	if (index !== -1) {
		cart.splice(index, 1);
	}
	return NextResponse.json(cart);
}
