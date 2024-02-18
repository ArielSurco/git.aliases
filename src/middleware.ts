import { NextRequest, NextResponse } from 'next/server'

import { Command, commands } from './constants/Commands'

export function middleware(request: NextRequest) {
  const hasCommands = request.cookies.has('commands')
  const cookiesCommands: Command[] = hasCommands
    ? JSON.parse(request.cookies.get('commands')?.value ?? '')
    : []
  const hasMissingCommand =
    commands.some((command) => !cookiesCommands.some((c) => c.id === command.id)) ||
    cookiesCommands.some((command) => !commands.some((c) => c.id === command.id))

  let response: NextResponse = NextResponse.next()

  if (!hasCommands) {
    response = NextResponse.redirect(request.nextUrl)
    response.cookies.set('commands', JSON.stringify(commands))
  }

  if (hasCommands && hasMissingCommand) {
    response = NextResponse.redirect(request.nextUrl)
    const newCommands = commands.map((command) => {
      const cookieCommand = cookiesCommands.find((c) => c.id === command.id)

      return cookieCommand ?? command
    })

    response.cookies.set('commands', JSON.stringify(newCommands))
  }

  return response
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
}
