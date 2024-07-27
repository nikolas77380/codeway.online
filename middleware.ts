import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLang, languages } from "./app/i18n/settings";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

const getLocale = (req: NextRequest): string | undefined => {
  if (req.cookies.has(cookieName)) {
    return req.cookies.get(cookieName)?.value;
  } else {
    const plainHeaders = headersToPlainObject(req.headers);
    let langUserPref = new Negotiator({ headers: plainHeaders }).languages();
    return match(languages, langUserPref, fallbackLang);
  }
};

function headersToPlainObject(headers: Headers) {
  const result: Record<string, string> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

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
