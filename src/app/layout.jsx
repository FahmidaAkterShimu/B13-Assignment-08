import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Body & UI font
const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

// Primary heading font
const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata = {
	title: 'Book Haven',
	description: 'Online Book Borrowing Platform',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${inter.variable} ${playfair.variable} h-screen antialiased`}
		>
			<body className='min-h-full flex flex-col font-(--font-inter)'>
				<main className='min-h-screen'>
					{children}
				</main>
			</body>
		</html>
	)
}