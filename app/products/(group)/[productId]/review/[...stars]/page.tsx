import React from "react";

export default function Stars({ params }: { params: { stars: string } }) {
	return (
		<div className='p-2 flex flex-col items-center w-full'>
			<h1>Review By User {params?.stars ? params?.stars?.length : 0}</h1>
		</div>
	);
}
