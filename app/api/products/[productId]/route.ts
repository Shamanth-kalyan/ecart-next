import { NextResponse } from "next/server";
import Products from "../../../constants/product.json";

export async function GET(
	request: Request,
	{ params }: { params: { productId: string } }
) {
	const find = params.productId
		? Products.find((product) => product.id === parseInt(params.productId))
		: undefined;
	return find
		? NextResponse.json(find)
		: NextResponse.json({ error: "Product not found" }, { status: 500 });
}
