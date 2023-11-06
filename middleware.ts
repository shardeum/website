import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isHome = request.nextUrl.pathname === "/";
  if (isHome) {
    return NextResponse.rewrite(new URL("/html/index.html", request.url));
  }
}
