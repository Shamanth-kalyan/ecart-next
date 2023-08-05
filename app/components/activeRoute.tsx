"use client";
import { usePathname } from "next/navigation";

export default function ActiveRoute() {
	const pathName = usePathname();

	return (
		<>
			<div>
				<span className={`${pathName === "/" ? "text-red-700" : ""} m-2`}>
					Root
				</span>
				|
				<span
					className={`${pathName === "/products" ? "text-red-700" : ""} m-2`}
				>
					Products
				</span>
				|
				<span
					className={`${
						pathName.includes("/summary") ? "text-red-700" : ""
					} m-2`}
				>
					Summary
				</span>
				|
				<span
					className={`${
						pathName.includes("/review") ? "text-red-700" : ""
					} m-2`}
				>
					Review
				</span>
			</div>
		</>
	);
}
