'use client'

import { useTheme } from '@mui/material/styles'
import { SwipeableDrawer, Box, Grid } from '@mui/material'

// Types
import type { DrawerProps } from '@/types/components/organisms/drawer'

const EdgeDrawerOrganism = (props: DrawerProps) => {
	// Props
	const { open, setOpen, children } = props

	// Variables
	const theme = useTheme()
	const drawerBleeding = 56

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			swipeAreaWidth={drawerBleeding}
			disableSwipeToOpen={false}
			ModalProps={{ keepMounted: true }}
			sx={{
				'& > .MuiPaper-root': {
					width: 'calc(100% - 16px)',
					height: 'calc(50% - 56px)',
					mx: 1,
					pt: 3,
					borderTopRightRadius: 16,
					borderTopLeftRadius: 16,
					overflow: 'visible'
				}
			}}
		>
			<Box width={30} height={6} position="absolute" top={8} left="calc(50% - 15px)" bgcolor={theme.palette.mode === 'dark' ? 'grey.900' : 'grey.300'} borderRadius={3} />

			<Grid container px={2} overflow="auto">
				{children}
			</Grid>
		</SwipeableDrawer>
	)
}

export default EdgeDrawerOrganism
