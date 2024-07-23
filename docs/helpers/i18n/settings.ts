// Configurations
import LocaleConfig from '@/config/locale'

export function getOptions(lng: string = LocaleConfig.default, ns: string | string[] | undefined = LocaleConfig.ns) {
	return {
		// debug: true,
		supportedLngs: LocaleConfig.list,
		fallbackLng: lng,
		lng,
		fallbackNS: LocaleConfig.ns[0],
		defaultNS: LocaleConfig.ns[0],
		ns
	}
}
