export type ListItemProp = {
	title: string
	link: string
	children?: ListItem[]
}

export type ListProps = {
	lng: string
	items: ListItemProp[]
}
