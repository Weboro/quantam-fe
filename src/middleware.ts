// middleware.ts (in your project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow /login
  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // Check mock auth cookie
  const authCookie = req.cookies.get("isAuthed");
  const isAuthed = authCookie?.value === "true";

  if (!isAuthed) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)",
  ],
};
