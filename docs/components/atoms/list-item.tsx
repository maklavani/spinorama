'use client'

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// Type
import { ListItemProps } from '@/types/components/atoms/list-item'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const ListItemAtom = (props: ListItemProps) => {
	// Props
	const { lng, item, showItem, level } = props

	// Variables
	const { t } = useTranslation(lng)

	return (
		<ListItemButton
			className={item.icon ? 'list-item-with-icon' : ''}
			disableTouchRipple={!item.link && !item.onClick ? true : false}
			onClick={item.onClick}
			sx={{
				display: showItem ? 'flex' : 'none',
				...(!item.link && { width: 1 }),
				py: 0.5,
				pr: 1,
				pl: level ? level * 2 + 1 : 1,
				...(!item.link &&
					!item.onClick && {
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

			{item.title && <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: level ? 500 : 600 } }}>{t(item.title)}</ListItemText>}

			{item.endIcon && (
				<ListItemIcon
					sx={{
						minWidth: 'auto',
						...(item.title && { ml: 1 }),
						'& .MuiSvgIcon-root': { fontSize: 20 }
					}}
				>
					{item.endIcon}
				</ListItemIcon>
			)}
		</ListItemButton>
	)
}

export default ListItemAtom
