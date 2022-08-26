import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname, origin } = req.nextUrl;

  // allow request if the following is true
  //    1. it's a request for next-auth session & provider fetching
  //    2. the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect to login if user don't have token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.rewrite(new URL("/login", req.url));

    // return NextResponse.redirect("/login")  // new Next version requires absolute path
    // retun NextResponse.redirect(`${origin}/login`) // doesn't work....
  }
};




// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";


// export async function middleware(req) {
//     const url = req.nextUrl.clone();
//     const token = await getToken({ req, secret: process.env.JWT_SECRET});

//     const { pathname } = req.nextUrl;

//     if (pathname.includes('/api/auth') || token) {
//         return NextResponse.next();
//     }
    
//     if (!token && pathname !== '/login') {
//         url.pathname = '/login'
//         return NextResponse.redirect(url) 
//     }
// }