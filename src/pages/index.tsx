
import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { NavBar } from '@/components/navbar';
import { easeIn, easeInOut, motion, useAnimate } from 'framer-motion';
import {BigCube} from '../components/MainCubes/BigCube'
import {MediumCube} from '../components/MainCubes/MediumCube'
import {SmallCube} from '../components/MainCubes/SmallCube'



const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });




const container = {
	show: {
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 100,
		scale: .8,
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,

		transition: {
			duration: .35,
			
		}
	},
}

const letterAnimation = {
	initial: {
		y: -400,
	},
	animate: {
		y: 0,
		transition: {
			duration: 2.25,
			ease: [0.6, 0.01, -0.05, 0.95],
		}
	}

}


export default function Home() {
	return (
		<main className={`flex bg-[#231F25]  min-h-screen flex-col  px-9 pt-9 pb-1 ${inter.className}`}>
			<NavBar />
			<motion.div variants={container} initial="hidden" animate="show">
				<motion.h1 variants={item} className="mt-20 text-[#C8B2B3] font-bold xl:text-9xl xl:mt-12 md:text-8xl">aiturgan talant</motion.h1>
				<motion.h1 variants={item} className="mt-20 text-[#A6A0A0] font-bold xl:text-[7.8rem] xl:leading-none xl:mt-0 flex justify-center md:text-[5.9rem]  md:leading-3">
					software engineer
				</motion.h1>
				<motion.h1 variants={item} className="mt-20 text-[#626F63] font-bold xl:text-[7.5rem] xl:leading-none xl:mt-0 flex justify-end pr-32 md:leading-none md:text-[5.9rem]">
					designer
				</motion.h1>
			</motion.div>
			

			<motion.div variants={container} initial="hidden" animate="show" className="flex gap-40 ">
				<motion.div  variants={item} className="pt-40 pl-40">
				<SmallCube/>
				</motion.div>
				<motion.div  variants={item}  className="pb-16 pl-8 lg:">
					<MediumCube/>
				</motion.div>
				<motion.div variants={item}  className="pt-12 pl-10">
					<BigCube/>
				</motion.div>
			</motion.div>


			<div>
			<svg width="325" height="356" viewBox="0 0 325 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M274.474 70.029L137.237 160.139L101.053 320.278L238.29 230.168L274.474 70.029Z" fill="#272C28" stroke="#1D211E" stroke-miterlimit="1"/>
<path d="M274.474 70.029L137.237 160.139L86.7104 125.125L223.947 35.0145L274.474 70.029Z" fill="#3B423B" stroke="#1D211E" stroke-miterlimit="1"/>
<path d="M137.237 160.139L101.053 320.278L50.5264 285.263L86.7104 125.124L137.237 160.139Z" fill="#454D45" stroke="#1D211E" stroke-miterlimit="1"/>
<path d="M238.29 230.168L101.053 320.278L50.5264 285.263L187.763 195.153L238.29 230.168Z" fill="#4E584F" stroke="#1D211E" stroke-miterlimit="1"/>
<path d="M238.29 230.168L274.474 70.0288L223.947 35.0144L187.763 195.153L238.29 230.168Z" fill="#626E63" stroke="#1D211E" stroke-miterlimit="1"/>
<path d="M223.947 35.0145L86.7104 125.124L50.5264 285.263L187.763 195.153L223.947 35.0145Z" fill="#586359" stroke="#1D211E" stroke-miterlimit="1"/>
</svg>
		<svg width="489" height="490" viewBox="0 0 489 490" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M313.942 423.907L244.451 244.918L58.32 197.786L127.811 376.775L313.942 423.907Z" fill="#504748" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		<path d="M313.942 423.908L244.451 244.918L361.091 113.061L430.582 292.05L313.942 423.908Z" fill="#8C7D7D" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		<path d="M244.451 244.918L58.3201 197.786L174.96 65.9286L361.091 113.061L244.451 244.918Z" fill="#786B6B" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		<path d="M127.811 376.775L58.32 197.786L174.96 65.9286L244.451 244.918L127.811 376.775Z" fill="#C8B2B3" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		<path d="M127.811 376.775L313.942 423.908L430.582 292.05L244.451 244.918L127.811 376.775Z" fill="#A08E8F" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		<path d="M430.582 292.05L361.091 113.061L174.96 65.9286L244.451 244.918L430.582 292.05Z" fill="#B4A0A1" stroke="#3C3536" stroke-width="1.23994" stroke-miterlimit="1"/>
		</svg>
		<svg width="454" height="241" viewBox="0 0 454 241" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2057 111.145L72.4523 60.2014L64.9942 10.4457L14.7475 61.3896L22.2057 111.145Z" fill="#0E0C0F" stroke="#0B090B" stroke-miterlimit="1"/>
<path d="M22.2057 111.145L72.4523 60.2014L439.476 179.739L389.23 230.683L22.2057 111.145Z" fill="#151316" stroke="#0B090B" stroke-miterlimit="1"/>
<path d="M72.4523 60.2013L64.9942 10.4457L432.018 129.984L439.476 179.739L72.4523 60.2013Z" fill="#19161A" stroke="#0B090B" stroke-miterlimit="1"/>
<path d="M14.7476 61.3895L64.9942 10.4457L432.018 129.984L381.772 180.927L14.7476 61.3895Z" fill="#1C191E" stroke="#0B090B" stroke-miterlimit="1"/>
<path d="M14.7476 61.3895L22.2058 111.145L389.23 230.683L381.772 180.927L14.7476 61.3895Z" fill="#231F25" stroke="#0B090B" stroke-miterlimit="1"/>
<path d="M389.23 230.683L439.476 179.739L432.018 129.984L381.772 180.927L389.23 230.683Z" fill="#201C21" stroke="#0B090B" stroke-miterlimit="1"/>
</svg>

			</div>
		</main>
	);
}
