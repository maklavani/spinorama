export type Language = 'en' | 'fa'

export type LocaleProps = {
	default: Language
	list: Language[]
	fallbackLng: Language
	ns: string[]
	cookieName: string
}
