import React from "react";

export default function Layout(props: {
	children: React.ReactNode;
	comment: React.ReactNode;
	feedback: React.ReactNode;
}) {
	return (
		<div className='flex flex-col w-full'>
			{props.children}
			{props.comment}
			{props.feedback}
		</div>
	);
}
