import { createInstance, FlatNamespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

// Types
import type { FallbackNs } from 'react-i18next'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { getOptions } from '@/helpers/i18n/settings'

const initI18next = async (lng?: string, ns?: string | string[]) => {
	const i18nInstance = createInstance()

	await i18nInstance
		.use(initReactI18next)
		.use(resourcesToBackend((language: string, namespace: string) => import(`../../locales/${language}/${namespace}.json`)))
		.init(getOptions(lng, ns))

	return i18nInstance
}

export async function useTranslation<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
	lng?: string,
	ns?: Ns,
	options: { keyPrefix?: KPrefix } = {}
) {
	const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? (ns as string[]) : (ns as string))

	return {
		t: i18nextInstance.getFixedT(lng ?? LocaleConfig.cookieName, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
		i18n: i18nextInstance
	}
}
