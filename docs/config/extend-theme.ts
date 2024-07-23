import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Types
import type { Direction } from '@mui/material/styles'

// Fonts
import RubikFont from '@/styles/fonts/rubik'
import RobotoFont from '@/styles/fonts/roboto'

const ExtendThemeConfig = (dir: Direction) =>
	extendTheme({
		direction: dir,
		colorSchemes: {
			light: {
				palette: {
					mode: 'light',
					primary: { light: '#3d3d3d', main: '#1f1f1f', dark: '#020202', contrastText: '#fff' },
					secondary: { light: '#f88e90', main: '#f11d21', dark: '#901113', contrastText: '#fff' }
				}
			},
			dark: {
				palette: {
					mode: 'dark',
					primary: { light: '#f5f5f5', main: '#e0e0e0', dark: '#bdbdbd', contrastText: '#fff' },
					secondary: { light: '#f88e90', main: '#f11d21', dark: '#901113', contrastText: '#fff' }
				}
			}
		},
		shape: { borderRadius: 16 },
		typography: {
			fontFamily: `${RubikFont.style.fontFamily}, ${RobotoFont.style.fontFamily}`,
			fontSize: 14
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: { scrollBehavior: 'smooth' },
					a: { textDecoration: 'none' }
				}
			}
		}
	})

export default ExtendThemeConfig
