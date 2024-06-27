import { isAuthenticated } from "@/app/api/isAuthenticated";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await isAuthenticated();

  if (!session) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
