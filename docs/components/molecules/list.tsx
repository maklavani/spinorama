'use client'

import Link from 'next/link'
import { Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MuiLink } from '@mui/material'

// Type
import { StyledListItemButtonProps, ListProps } from '@/types/components/molecules/list'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const StyledListItemButton = (props: StyledListItemButtonProps) => {
	// Props
	const { lng, item, level } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
		<ListItemButton
			className={item.icon ? 'list-item-with-icon' : ''}
			disableTouchRipple={!item.link && !item.onClick ? true : false}
			onClick={item.onClick}
			sx={{
				...(!item.link && { width: 1 }),
				py: 0.5,
				pr: 1,
				pl: level ? level * 2 + 1 : 1,
				...(!item.link &&
					!item.onClick && {
						cursor: 'inherit',
						...(!item.children && { '&:hover': { bgcolor: 'transparent' } })
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

			{item.title && <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: level ? 500 : 600 } }}>{t(item.title)}</ListItemText>}
		</ListItemButton>
	)
}

const ListMolecule = (props: ListProps) => {
	// Props
	const { lng, items, level } = props

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
				{items.map((item, index) => (
					<ListItem key={index} sx={{ width: 1, flexDirection: 'column', mb: 0.5, p: 0, '&:last-child': { mb: 0 } }}>
						{item.link ? (
							item.linkType === 'mui' ? (
								<MuiLink href={item.link}>
									<StyledListItemButton lng={lng} item={item} level={level} />
								</MuiLink>
							) : (
								<Link href={item.link}>
									<StyledListItemButton lng={lng} item={item} level={level} />
								</Link>
							)
						) : (
							<StyledListItemButton lng={lng} item={item} level={level} />
						)}

						{item.children && <ListMolecule lng={lng} items={item.children} level={level ? level + 1 : 1} />}
					</ListItem>
				))}
			</List>
		</Paper>
	)
}

export default ListMolecule
