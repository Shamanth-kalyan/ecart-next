import { redirect } from "next/navigation";

async function getProduct(id: string) {
	const res = await fetch(`http://localhost:3000/api/products/${id}`);

	return res.ok ? res.json() : Promise.resolve(undefined);
}

export default async function ProductInfo({ id }: { id: string }) {
	const product = await getProduct(id);

	if (!product) {
		redirect("/products");
	}
	return (
		<>
			<h1 className='mb-10'>{product.name}</h1>
			<p className='text-base'>{product.description}</p>
			<p className='text-base'>
				Type {" - "}
				{product.type}
			</p>
			<p className='text-base'>
				Product Rating {" - "}
				{product.rating}
			</p>
			<p className='text-base'>
				Product Comment {" - "}
				{product.review?.comment}
			</p>
			<p className='text-base'>
				Product Feedback {" - "}
				{product.review?.feedback}
			</p>
		</>
	);
}
