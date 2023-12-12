import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Function to retrieve the locale based on request headers
function getLocale(request: NextRequest): string {
  // Convert request headers to an object
  const negotiatorHeaders = Object.fromEntries(request.headers);

  // Create a mutable copy of locales from the readonly i18n.locales
  const locales: string[] = [...i18n.locales];

  // Get the languages requested by the client
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Match client languages with available locales or default to the defaultLocale
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  // If no suitable locale is found, throw an error
  if (!locale) {
    throw new Error("Locale not found");
  }

  return locale;
}

// Middleware to handle redirection if locale is missing in the URL
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname contains any of the supported locales
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname is missing a locale, handle redirection
  if (!pathnameHasLocale) {
    try {
      // Get the locale based on request headers
      const locale = getLocale(request);

      // Redirect to the URL with the proper locale
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url
        )
      );
    } catch (error) {
      // If unable to determine locale, redirect to default locale
      return NextResponse.redirect(
        new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
      );
    }
  }
}

// Configuration for paths to ignore for this middleware
export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/subdomain/**`, and other paths
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
