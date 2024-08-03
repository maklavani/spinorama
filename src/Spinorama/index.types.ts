// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaSettings = {
	/**
	 * The duration of the interval between slide transitions (in milliseconds)
	 * This is the time it takes for the transition to complete
	 *
	 * @default 10000
	 */
	interval?: number

	/**
	 * The duration of the slide change animation (in milliseconds)
	 * This is the time it takes for the animation to complete
	 *
	 * @default 1000
	 */
	duration?: number

	/**
	 * The easing function to apply to the transition between slides
	 * This can be any valid [GSAP easing function](https://greensock.com/ease-visualizer/)
	 *
	 * @default 'power1.inOut'
	 */
	ease?:
		| 'none'
		| 'power1'
		| 'power1.in'
		| 'power1.out'
		| 'power1.inOut'
		| 'power2'
		| 'power2.in'
		| 'power2.out'
		| 'power2.inOut'
		| 'power3'
		| 'power3.in'
		| 'power3.out'
		| 'power3.inOut'
		| 'power4'
		| 'power4.in'
		| 'power4.out'
		| 'power4.inOut'
		| 'back'
		| 'back.in'
		| 'back.out'
		| 'back.inOut'
		| 'bounce'
		| 'bounce.in'
		| 'bounce.out'
		| 'bounce.inOut'
		| 'circ'
		| 'circ.in'
		| 'circ.out'
		| 'circ.inOut'
		| 'elastic'
		| 'elastic.in'
		| 'elastic.out'
		| 'elastic.inOut'
		| 'expo'
		| 'expo.in'
		| 'expo.out'
		| 'expo.inOut'
		| 'sine'
		| 'sine.in'
		| 'sine.out'
		| 'sine.inOut'
}

export type SpinoramaProps = BoxProps & SpinoramaSettings
