"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Review() {
	const path = usePathname();

	return (
		<div className='p-2 w-full'>
			<h1>Review Component</h1>
			<div className='flex flex-col w-full'>
				{[1, 2, 3, 4, 5].map((rating: number) => {
					const ratingUrl = Array.from(Array(rating).keys())
						.toString()
						.replaceAll(",", "/");
					return (
						<Link
							key={rating}
							href={ratingUrl ? `${path}/${ratingUrl}` : `${path}`}
							className='text-base my-2 bg-red-500 w-full'
						>
							{rating} Star
						</Link>
					);
				})}
			</div>
		</div>
	);
}
