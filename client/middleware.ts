import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for admin routes or protected API routes
  const isAdminRoute = pathname.startsWith('/admin')
  const isProtectedApiRoute = pathname.startsWith('/api/upload-image') || pathname.startsWith('/api/delete-image')
  
  // Allow login page to pass through
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // For admin routes and protected API routes, check authentication
  if (isAdminRoute || isProtectedApiRoute) {
    // Get the Firebase ID token from cookies
    const token = request.cookies.get('firebase-auth-token')?.value
    
    if (!token) {
      // Redirect to login for admin routes
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      // Return 401 for API routes
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Basic token validation (check if token exists and is not empty)
    // For more robust verification, use a server-side API route instead
    if (token && token.length > 0) {
      // Token exists, allow the request
      return NextResponse.next()
    } else {
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/upload-image',
    '/api/delete-image'
  ]
}
