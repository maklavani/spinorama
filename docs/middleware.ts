import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'

// Types
import type { NextRequest } from 'next/server'

// Configurations
import LocaleConfig from '@/config/locale'

// Accept languages
acceptLanguage.languages(LocaleConfig.list)

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|manifest.json|images/).*)']
}

export function middleware(request: NextRequest) {
	// Find default language
	const pathname = request.nextUrl.pathname
	let defaultLng: string | null = null

	if (!defaultLng) defaultLng = acceptLanguage.get(request.headers.get('Accept-Language'))
	if (!defaultLng && request.cookies.has(LocaleConfig.cookieName)) defaultLng = acceptLanguage.get(request.cookies.get(LocaleConfig.cookieName)?.value)
	if (!defaultLng) defaultLng = LocaleConfig.fallbackLng

	// Redirect if lng in path is not supported
	if (!LocaleConfig.list.some(lng => request.nextUrl.pathname.startsWith(`/${lng}`)) && !request.nextUrl.pathname.startsWith('/_next'))
		return NextResponse.redirect(new URL(`/${defaultLng}${request.nextUrl.pathname}`, request.url))

	if (request.headers.has('referer')) {
		const refererUrl = new URL(request.headers.get('referer') ?? '')
		const lngInReferer = LocaleConfig.list.find(lng => refererUrl.pathname.startsWith(`/${lng}`))
		const response = NextResponse.next()

		if (lngInReferer) {
			response.cookies.set(LocaleConfig.cookieName, lngInReferer)
			defaultLng = lngInReferer
		}

		return response
	}
	// Find language
	else defaultLng = defaultLng ?? LocaleConfig.list.find(lng => pathname.startsWith(`/${lng}`))

	return NextResponse.next()
}
