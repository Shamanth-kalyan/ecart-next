import ActiveRoute from "./components/activeRoute";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='p-10 m-10'>
					<div className='border border-white px-3'>
						<ActiveRoute />
					</div>
					<div className='border border-white mt-2'>{children}</div>
				</div>
			</body>
		</html>
	);
}
