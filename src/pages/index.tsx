import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { GlassNavigation } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex bg-black min-h-screen flex-col items-center justify-between p-9 ${inter.className}`}>
			<GlassNavigation />
		</main>
	);
}
