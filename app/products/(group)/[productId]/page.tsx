import ProductInfo from "@/app/components/product";
import React from "react";

export default function Product({ params }: { params: { productId: string } }) {
	return (
		<div className='p-2 flex flex-col items-center'>
			<ProductInfo id={params.productId} />
		</div>
	);
}
