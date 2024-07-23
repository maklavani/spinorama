'use client'

import { useState, useEffect } from 'react'
import i18next, { FlatNamespace, KeyPrefix } from 'i18next'
import { initReactI18next, useTranslation as useTranslationBase } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// Types
import type { FallbackNs, UseTranslationOptions } from 'react-i18next'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { getOptions } from '@/helpers/i18n/settings'

// Variables
const runsOnServerSide = typeof window === 'undefined'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(resourcesToBackend((language: string, namespace: string) => import(`../../locales/${language}/${namespace}.json`)))
	.init({
		...getOptions(),
		// Let detect the language on client side
		lng: undefined,
		detection: {
			order: ['path', 'htmlTag', 'cookie', 'navigator']
		},
		preload: runsOnServerSide ? LocaleConfig.list : []
	})

export function useTranslation<Ns extends FlatNamespace | undefined = undefined, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
	lng?: string,
	ns?: Ns,
	options?: UseTranslationOptions<KPrefix>
) {
	const [cookies, setCookie] = useCookies([LocaleConfig.cookieName])
	const ret = useTranslationBase(ns, options)
	const { i18n } = ret

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) i18n.changeLanguage(lng)
	else {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (activeLng === i18n.resolvedLanguage) return
			setActiveLng(i18n.resolvedLanguage)
		}, [activeLng, i18n.resolvedLanguage])

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (!lng || i18n.resolvedLanguage === lng) return
			i18n.changeLanguage(lng)
		}, [lng, i18n])

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (cookies.i18next === lng) return
			setCookie(LocaleConfig.cookieName, lng, { path: '/' })
		}, [lng, cookies.i18next, setCookie])
	}

	return ret
}
