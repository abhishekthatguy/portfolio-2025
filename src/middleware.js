import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Allow all crawlers and bots
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|twitterbot|linkedinbot|applebot|ia_archiver/i.test(userAgent);
  
  // Set proper headers for crawlers
  if (isBot) {
    response.headers.set('X-Robots-Tag', 'index, follow');
  }
  
  // Ensure proper content-type headers
  response.headers.set('Content-Type', 'text/html; charset=utf-8');
  
  // Add CORS headers for better accessibility
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  // Don't block any requests - allow all
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

