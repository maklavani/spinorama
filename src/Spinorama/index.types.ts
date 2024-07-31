// Types
import type { BoxProps } from '@mui/material'

export type SpinoramaSettings = {
	/**
	 * The duration of the transition between slides (in milliseconds)
	 *
	 * @default 10000
	 */
	duration?: number

	/**
	 * The duration of the animation that occurs when the user manually
	 * changes the slide (in milliseconds)
	 *
	 * @default 1000
	 */
	animateDuration?: number

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
