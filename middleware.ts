import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLang, languages } from "./app/i18n/settings";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

const getLocale = (req: NextRequest): string | undefined => {
  let langUserPref;
  if (req.cookies.has(cookieName)) {
    langUserPref = req.cookies.get(cookieName)?.value;
  } else {
    langUserPref = req.headers.get("Accept-Language");
  }
  return match(languages, [langUserPref ?? ""], fallbackLang);
};

export function middleware(req: NextRequest) {
  const lang = getLocale(req);
  if (
    !languages.some((lng) => req.nextUrl.pathname.startsWith(`/${lng}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");
    const langInReferer = languages.find((lng) =>
      refererUrl.pathname.startsWith(`/${lng}`)
    );
    const response = NextResponse.next();
    if (langInReferer) response.cookies.set(cookieName, langInReferer);
    return response;
  }

  return NextResponse.next();
}
