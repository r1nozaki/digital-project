'use client'

import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '../../common/Logo'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
	const pathname = usePathname()
	const [isOpenBurger, setIsOpenBurger] = useState(false)

	useEffect(() => {
		// eslint-disable-next-line
		setIsOpenBurger(false)
	}, [pathname])

	return (
		<header className='relative flex items-center justify-between w-full p-4 md:py-8 sm:px-18 md:px-20 lg:px-34 font-roboto'>
			<Logo color='black' />
			<button
				className='flex items-center justify-center w-10 h-10 md:hidden'
				onClick={() => setIsOpenBurger(!isOpenBurger)}
			>
				{isOpenBurger ? <X /> : <Menu />}
			</button>
			<AnimatePresence>
				{isOpenBurger && (
					<motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className='absolute left-0 z-40 w-full top-full'
					>
						<ul className='flex flex-col items-center gap-5 p-4 bg-white shadow-lg md:hidden'>
							<HeaderNavigation />
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
			<nav className='hidden md:flex'>
				<ul className='flex items-center gap-15'>
					<HeaderNavigation />
				</ul>
			</nav>
		</header>
	)
}

export default Header
