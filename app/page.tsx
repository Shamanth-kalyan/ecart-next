import Link from "next/link";

export default function Home() {
	return (
		<div className='flex flex-col items-center w-full h-full justify-center p-2'>
			<h1 className='mb-10'>Home Component</h1>
			<p className='mb-10'>Feel like Home</p>
			<div className='w-full flex justify-evenly items-center mt-10'>
				<Link href='/products' className='text-base bg-red-500 mb-2'>
					Product List
				</Link>
			</div>
		</div>
	);
}
