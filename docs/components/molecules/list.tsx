'use client'

import Link from 'next/link'
import { List, ListItem, ListItemButton } from '@mui/material'

// Type
import { ListProps } from '@/types/components/molecules/list'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const ListMolecule = (props: ListProps) => {
	// Props
	const { lng, items } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
		<List
			sx={{
				width: 1,
				py: 0,
				'& a': { width: 1 }
			}}
		>
			{items.map((item, index) => (
				<ListItem key={index} sx={{ width: 1, flexDirection: 'column', p: 0 }}>
					<Link href={item.link}>
						<ListItemButton>{t(item.title)}</ListItemButton>
					</Link>

					{item.children && <ListMolecule lng={lng} items={item.children} />}
				</ListItem>
			))}
		</List>
	)
}

export default ListMolecule
