// Types
import type { Dispatch, SetStateAction } from 'react'

export type DrawerProps = {
	lng: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}
