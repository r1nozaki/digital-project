'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { lenis } from '../lenisInstance'

const ScrollToTop = () => {
	const pathname = usePathname()

	useEffect(() => {
		if (!lenis) return

		lenis.stop()
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

		const timeout = setTimeout(() => {
			lenis?.start()
		}, 300)

		return () => clearTimeout(timeout)
	}, [pathname])

	return null
}

export default ScrollToTop
