'use client'

import Link from 'next/link'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material'

// Type
import { ListProps } from '@/types/components/molecules/list'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'
import { width } from '@mui/system'

const ListMolecule = (props: ListProps) => {
	// Props
	const { lng, items, level } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
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
			{items.map((item, index) => (
				<ListItem key={index} sx={{ width: 1, flexDirection: 'column', mb: 0.5, p: 0, '&:last-child': { mb: 0 } }}>
					{item.link ? (
						<Link href={item.link}>
							<ListItemButton
								className={item.icon ? 'list-item-with-icon' : ''}
								sx={{
									py: 0.5,
									pr: 1,
									pl: level ? level * 2 + 1 : 1
								}}
							>
								{item.icon && (
									<ListItemIcon
										sx={{
											minWidth: 'auto',
											...(item.title && { mr: 1 }),
											...(item.iconColor && { color: item.iconColor }),
											'& .MuiSvgIcon-root': { fontSize: 20 }
										}}
									>
										{item.icon}
									</ListItemIcon>
								)}

								{item.title && <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: level ? 500 : 600 } }}>{t(item.title)}</ListItemText>}
							</ListItemButton>
						</Link>
					) : (
						<ListItemButton
							disableTouchRipple={!item.onClick ? true : false}
							className={item.icon ? 'list-item-with-icon' : ''}
							onClick={item.onClick}
							sx={{
								width: 1,
								py: 0.5,
								pr: 1,
								pl: level ? level * 2 + 1 : 1,
								...(!item.onClick && {
									cursor: 'inherit',
									'&:hover': { bgcolor: 'transparent' }
								})
							}}
						>
							{item.icon && (
								<ListItemIcon
									sx={{
										minWidth: 'auto',
										...(item.title && { mr: 1 }),
										...(item.iconColor && { color: item.iconColor }),
										'& .MuiSvgIcon-root': { fontSize: 20 }
									}}
								>
									{item.icon}
								</ListItemIcon>
							)}

							{item.title && (
								<ListItemText
									sx={{
										'& .MuiTypography-root': {
											fontSize: 16,
											fontWeight: 600
										}
									}}
								>
									{t(item.title)}
								</ListItemText>
							)}
						</ListItemButton>
					)}

					{item.children && <ListMolecule lng={lng} items={item.children} level={level ? level + 1 : 1} />}
				</ListItem>
			))}
		</List>
	)
}

export default ListMolecule
