// import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";
// oder on one go:
// export { default } from "next-auth/middleware";

// if we don't use the imported middleware function from next-auth:
// ----------------------------------------------------------------
// export function middleware(request: NextRequest) {
//   console.log(request.url);
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export default middleware;

export const config = {
  // *: zero or more parameters
  // +: one or more paramters
  // ?: zero or one parameters
  matcher: ["/users/:id*", "/dashboard/:path*"],
};
