'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Paper, List, ListItem, Link as MuiLink } from '@mui/material'

// Type
import { ListProps } from '@/types/components/molecules/list'

// Utils
import CheckParentInChildren from '@/utils/check-parent-in-children'

// Components
const ListItemAtom = dynamic(() => import('@/components/atoms/list-item'))

const ListMolecule = (props: ListProps) => {
	// Props
	const { lng, items, parent, level } = props

	return (
		<Paper
			elevation={0}
			sx={{
				...(!level && { bgcolor: 'inherit' })
			}}
		>
			<List
				sx={{
					width: 'inherit',
					py: 0,
					'& a': {
						textDecoration: 'none',
						color: 'currentColor'
					}
				}}
			>
				{items.map((item, index) => {
					// Variables
					const showItem = (!parent && !item.parent) || item.parent === parent
					const showChildren = item.children && CheckParentInChildren(item.children, parent)

					return (
						<ListItem
							key={index}
							sx={{
								display: showItem || showChildren ? 'block' : 'none',
								width: 1,
								flexDirection: 'column',
								mb: 0.5,
								p: 0,
								'&:last-child': { mb: 0 }
							}}
						>
							{item.link ? (
								item.linkType === 'mui' ? (
									<MuiLink href={item.link}>
										<ListItemAtom lng={lng} item={item} showItem={showItem} level={level} />
									</MuiLink>
								) : (
									<Link href={item.link}>
										<ListItemAtom lng={lng} item={item} showItem={showItem} level={level} />
									</Link>
								)
							) : (
								<ListItemAtom lng={lng} item={item} showItem={showItem} level={level} />
							)}

							{item.children && <ListMolecule lng={lng} items={item.children} parent={parent} level={level ? level + 1 : 1} />}
						</ListItem>
					)
				})}
			</List>
		</Paper>
	)
}

export default ListMolecule
