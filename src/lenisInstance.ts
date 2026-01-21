'use client'

import Lenis from 'lenis'

export let lenis: Lenis | null = null

if (typeof window !== 'undefined') {
	lenis = new Lenis({
		duration: 1.5,
		easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
		lerp: 0.08
	})

	const raf = (time: number) => {
		lenis?.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
}
