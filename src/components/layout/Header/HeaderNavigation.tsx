'use client'

import Link from 'next/link'
import { type NavigationItem } from '../../../types/Navigation'
import { usePathname } from 'next/navigation'
const HeaderNavigation = () => {
	const pathname = usePathname()

	const navItems: NavigationItem[] = [
		{ path: '/', label: 'Home' },
		{ path: '/gallery', label: 'Gallery' },
		{ path: '/projects', label: 'Projects' },
		{ path: '/contact-us', label: 'Contacts' }
	]

	return (
		<>
			{navItems.map(({ path, label }) => (
				<Link
					className={`text-base border-black font-medium py-1 uppercase text-[#333333] ${pathname === path ? 'border-y' : 'hover:border-y'}`}
					key={path}
					href={path}
				>
					{label}
				</Link>
			))}
		</>
	)
}

export default HeaderNavigation
