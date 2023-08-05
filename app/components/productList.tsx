import Link from "next/link";
import { Fragment } from "react";

async function getProductList() {
	const res = await fetch("http://localhost:3000/api/products");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function ProductList() {
	const productList = await getProductList();
	return (
		<>
			{productList.map(
				(product: { id: number; name: string; description: string }) => (
					<Fragment>
						<Link
							href={`/products/${product.id}`}
							className='text-base my-2 bg-red-500'
						>
							{product.name} {" - "} {product.description}
						</Link>
					</Fragment>
				)
			)}
		</>
	);
}
