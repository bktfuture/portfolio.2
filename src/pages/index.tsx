import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { NavBar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex bg-[#231F25]  min-h-screen flex-col  px-9 pt-9 pb-1 ${inter.className}`}>
			<NavBar />
			<h1 className="mt-20 text-[#C8B2B3] font-bold text-9xl mt-12 md:text-8xl">aiturgan talant</h1>
			<h1 className="mt-20 text-[#A6A0A0] font-bold text-[7.8rem] leading-none mt-0 flex justify-center md:text-[5.9rem] md:leading-3">
				software engineer
			</h1>
			<h1 className="mt-20 text-[#626F63] font-bold text-[7.5rem] leading-none mt-0 flex justify-end pr-32 md:leading-none md:text-[5.9rem]">
				designer
			</h1>

			<div className="flex gap-40 ">
				<div className="pt-40 pl-40">
					<svg width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M272 204.5L137 137L2 204.5L137 272L272 204.5Z" fill="#443D19" stroke="#443D19" stroke-width="2.31056" stroke-miterlimit="1" />
						<path d="M272 204.5L137 137V2L272 69.4999V204.5Z" fill="#897A32" stroke="#443D19" stroke-width="2.31056" stroke-miterlimit="1" />
						<path d="M137 137L2 204.5V69.4999L137 2V137Z" fill="#897A32" stroke="#443D19" stroke-width="2.31056" stroke-miterlimit="1" />
						<path d="M137 272L2 204.5V69.4999L137 137V272Z" fill="#B6A342" stroke="#443D19" stroke-width="2.31056" stroke-miterlimit="1" />
						<path d="M137 272L272 204.5V69.4999L137 137V272Z" fill="#B6A342" stroke="#443D19" stroke-width="2.31056" stroke-miterlimit="1" />
						<path
							d="M272 69.4999L137 2L2 69.4999L137 137L272 69.4999Z"
							fill="#E4CC53"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
					</svg>
				</div>
				<div className="pb-16 pl-8 lg:">
					<svg width="339" height="338" viewBox="0 0 344 338" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.88701 89.9493L175.482 171.5L346.336 84.3502L172.74 2.79956L1.88701 89.9493Z"
							fill="#443D19"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
						<path
							d="M1.88674 89.9494L175.482 171.5L178.224 340.2L4.62903 258.65L1.88674 89.9494Z"
							fill="#897A32"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
						<path
							d="M175.482 171.5L346.336 84.3502L349.078 253.051L178.225 340.2L175.482 171.5Z"
							fill="#897A32"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
						<path
							d="M172.74 2.79959L346.335 84.3502L349.078 253.051L175.482 171.5L172.74 2.79959Z"
							fill="#B6A342"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
						<path
							d="M172.74 2.79959L1.88667 89.9494L4.62895 258.65L175.482 171.5L172.74 2.79959Z"
							fill="#B6A342"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
						<path
							d="M4.62919 258.65L178.225 340.2L349.078 253.051L175.482 171.5L4.62919 258.65Z"
							fill="#E4CC53"
							stroke="#443D19"
							stroke-width="2.31056"
							stroke-miterlimit="1"
						/>
					</svg>
				</div>
				<div className="pt-12 pl-10">
					<svg width="636" height="460" viewBox="0 0 636 460" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M637 297L329 143L1 307L309 461L637 297Z" fill="#443D19" stroke="#443D19" stroke-miterlimit="1" />
						<path d="M637 297L329 143V1L637 155V297Z" fill="#897A32" stroke="#443D19" stroke-miterlimit="1" />
						<path d="M329 143L1 307V165L329 1V143Z" fill="#897A32" stroke="#443D19" stroke-miterlimit="1" />
						<path d="M309 461L1 307V165L309 319V461Z" fill="#B6A342" stroke="#443D19" stroke-miterlimit="1" />
						<path d="M309 461L637 297V155L309 319V461Z" fill="#B6A342" stroke="#443D19" stroke-miterlimit="1" />
						<path d="M637 155L329 1L1 165L309 319L637 155Z" fill="#E4CC53" stroke="#443D19" stroke-miterlimit="1" />
					</svg>
				</div>
			</div>
		</main>
	);
}
