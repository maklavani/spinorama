import { useId } from 'react'
import { SvgIcon } from '@mui/material'

// Types
import type { IconProps } from '@/types/components/atoms/icon'

const LogoIconAtom = (props: IconProps) => {
	// Props
	const { primary, secondary } = props

	// Variables
	const id = useId()

	return (
		<SvgIcon viewBox="0 0 1000 1000">
			<defs>
				<linearGradient id={id} gradientUnits="userSpaceOnUse" x1={500} y1={1000} x2={500} y2={0} spreadMethod="pad">
					<stop offset="0%" stopColor={secondary ?? 'currentColor'} />
					<stop offset="100%" stopColor={primary ?? 'currentColor'} />
				</linearGradient>
			</defs>

			<path
				fill={`url(#${id})`}
				d="M 914.25 414.25 L 810.7 414.25 Q 810.7 542.85 719.7 633.9 628.65 724.9 500 724.9 371.4 724.9 280.35 633.9 189.35 542.85 189.35 414.25 189.35 285.6 280.35 194.55 371.4 103.55 500 103.55 L 500 0 487.9 0 489.3 0.05 Q 324.7078125 3.7921875 207.15 121.35 85.75 242.75 85.75 414.25 85.75 585.75 207.15 707.1 328.5 828.5 500 828.5 L 500 1000 792.9 707.1 Q 914.25 585.75 914.25 414.25 M 690.25 604.6 L 690.35 604.6 Q 769.3 525.75 769.3 414.25 769.3 302.8 690.25 223.8 611.45 144.95 500 144.95 388.5 144.95 309.45 223.8 230.75 302.8 230.75 414.25 L 334.3 414.25 Q 334.3 345.55 382.8 297 431.25 248.55 500 248.55 568.7 248.55 617.15 297 665.7 345.55 665.7 414.25 665.7 482.9 617.25 531.45 L 500 414.25 500 683.5 Q 611.45 683.5 690.25 604.6 Z"
			/>
		</SvgIcon>
	)
}

export default LogoIconAtom
