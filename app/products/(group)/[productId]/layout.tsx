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
				{path.includes("review") ? null : (
					<Link href={`${path}/review`} className='text-base my-2 bg-red-500'>
						Review
					</Link>
				)}
			</div>
		</>
	);
}
