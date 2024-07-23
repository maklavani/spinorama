// Types
import type { LocaleProps } from '@/types/configs/locale'

// Configurations
import Config from '@/config'

const LocaleConfig: LocaleProps = {
	default: 'en',
	list: ['en', 'fa'],
	fallbackLng: 'en',
	ns: ['common', 'links', 'form'],
	cookieName: `${Config.shortName.toLocaleLowerCase()}-i18next`
}

export default LocaleConfig
