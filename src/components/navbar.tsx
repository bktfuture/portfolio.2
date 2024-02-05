import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useAnimate, motion, AnimationScope } from 'framer-motion';
import { FiMenu, FiArrowUpRight } from 'react-icons/fi';

export const GlassNavigation = () => {
	const [hovered, setHovered] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const [scope, animate] = useAnimate();
	const navRef = useRef<HTMLDivElement | null>(null);

	return (
		<nav
			ref={navRef}
			className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-fit overflow-hidden border-[1px] border-blue-50/10 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-full"
		>
			<div className="glass-nav flex items-center justify-evenly px-9 py-3">
				<Links />
			</div>
			<button
				onClick={() => setMenuOpen((pv) => !pv)}
				className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
			>
				<FiMenu />
			</button>

			<MobileMenu menuOpen={menuOpen} />
		</nav>
	);
};

const Links = () => (
	<div className="hidden items-center gap-2 md:flex">
		<GlassLink text="About me" />
		<GlassLink text="Portfolio" />
		<GlassLink text="Resume" />
		<GlassLink text="Contact" />
	</div>
);

const GlassLink = ({ text }: { text: string }) => {
	return (
		<a href="#" className="group relative scale-100 overflow-hidden rounded-full px-4 py-2 transition-transform hover:scale-105 active:scale-95">
			<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">{text}</span>
			<span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
		</a>
	);
};

const TextLink = ({ text }: { text: string }) => {
	return (
		<a href="#" className="text-white/90 transition-colors hover:text-white">
			{text}
		</a>
	);
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
	return (
		<motion.div
			initial={false}
			animate={{
				height: menuOpen ? 'fit-content' : '0px',
			}}
			className="block overflow-hidden md:hidden"
		>
			<div className="flex items-center justify-between px-4 pb-4">
				<div className="flex items-center gap-3">
					<TextLink text="About Me" />
					<TextLink text="Portfolio" />
					<TextLink text="Contact" />
				</div>
			</div>
		</motion.div>
	);
};

export default GlassNavigation;
