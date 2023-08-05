"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	const path = usePathname();

	return (
		<>
			{children}
			<div className='w-full flex items-center justify-evenly mt-10'>
				{path === "/products" ? null : (
					<Link href='/products' className='text-base my-2 bg-red-500'>
						Product List
					</Link>
				)}
				{path !== "/products" ? null : (
					<Link href={`${path}/summary`} className='text-base my-2 bg-red-500'>
						Review Summary
					</Link>
				)}
				<Link href='/' className='text-base my-2 bg-red-500'>
					Home
				</Link>
			</div>
		</>
	);
}
