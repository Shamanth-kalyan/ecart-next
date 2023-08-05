import { NextResponse } from "next/server";
import Products from "../../constants/product.json";

export async function GET() {
	return NextResponse.json(Products);
}
