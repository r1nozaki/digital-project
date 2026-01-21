'use client'

import { useEffect } from 'react'

interface Lenis {
	start: () => void
	stop: () => void
}

const useBlockScroll = (state: boolean, lenis: Lenis | null) => {
	useEffect(() => {
		if (state) {
			document.body.style.overflow = 'hidden'
			if (lenis) lenis.stop()
		} else {
			document.body.style.overflow = ''
			if (lenis) lenis.start()
		}

		return () => {
			document.body.style.overflow = ''
			if (lenis) lenis.start()
		}
	}, [state, lenis])
}

export default useBlockScroll
