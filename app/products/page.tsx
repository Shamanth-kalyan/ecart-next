import React from "react";
import ProductList from "../components/productList";

export default async function Products() {
	return (
		<div className='p-2'>
			<h1>Products Component</h1>
			<div className='flex flex-col'>
				<ProductList />
			</div>
		</div>
	);
}
