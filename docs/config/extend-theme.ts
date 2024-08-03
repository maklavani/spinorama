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
					primary: { light: '#b199f4', main: '#7d54ed', dark: '#511ae7', contrastText: '#fff' },
					secondary: { light: '#e8b6e1', main: '#ba39a7', dark: '#912c82', contrastText: '#fff' }
				}
			},
			dark: {
				palette: {
					mode: 'dark',
					primary: { light: '#b199f4', main: '#7d54ed', dark: '#511ae7', contrastText: '#fff' },
					secondary: { light: '#e8b6e1', main: '#ba39a7', dark: '#912c82', contrastText: '#fff' },
					background: { default: '#0f132e', paper: '#252f72' }
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
