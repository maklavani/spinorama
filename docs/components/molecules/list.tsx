'use client'

import Link from 'next/link'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material'

// Type
import { ListProps } from '@/types/components/molecules/list'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const ListMolecule = (props: ListProps) => {
	// Props
	const { lng, items, level } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
		<List
			sx={{
				width: 1,
				'& a': { width: 1 }
			}}
		>
			{items.map((item, index) => (
				<ListItem key={index} sx={{ width: 1, flexDirection: 'column', mb: 0.5, p: 0, '&:last-child': { mb: 0 } }}>
					{item.link ? (
						<Link href={item.link}>
							<ListItemButton
								sx={{
									py: 0.5,
									pr: 1,
									pl: level ? level * 2 + 1 : 1,
									color: 'grey.800'
								}}
							>
								{item.icon && (
									<ListItemIcon
										sx={{
											minWidth: 'auto',
											mr: 1,
											color: item.iconColor ?? 'grey.800',
											'& .MuiSvgIcon-root': { fontSize: 20 }
										}}
									>
										{item.icon}
									</ListItemIcon>
								)}

								<ListItemText sx={{ '& .MuiTypography-root': { fontWeight: level ? 500 : 600 } }}>{t(item.title)}</ListItemText>
							</ListItemButton>
						</Link>
					) : (
						<Box width={1} px={1} color="grey.800">
							{item.icon && (
								<ListItemIcon
									sx={{
										minWidth: 'auto',
										mr: 1,
										color: item.iconColor ?? 'grey.800',
										'& .MuiSvgIcon-root': { fontSize: 20 }
									}}
								>
									{item.icon}
								</ListItemIcon>
							)}

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
						</Box>
					)}

					{item.children && <ListMolecule lng={lng} items={item.children} level={level ? level + 1 : 1} />}
				</ListItem>
			))}
		</List>
	)
}

export default ListMolecule
