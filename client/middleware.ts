import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for protected routes
const protectedRoute = createRouteMatcher(['/dashboard']);

export default clerkMiddleware(async (auth, req) => {
    if (protectedRoute(req)) {
        // Protect the route if it matches
        auth().protect();
    }
    
    // Allow public access to routes not matching '/dashboard'
    if (req.url.includes('/page')) {
        return NextResponse.next();
    }

    // Allow other public routes to continue
    return NextResponse.next();
});

// Configuration for matching routes
export const config = {
    matcher: [
        '/((?!.*\\..*|_next).*)', // Match all routes except those containing a dot (.) or starting with _next
        '/',                      // Match the root route
        '/(api|trpc)(.*)'         // Match routes starting with /api or /trpc
    ],
};
