import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { Layout } from '@/types/Components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Git aliases generator',
  description: 'Webapp to create aliases to commands in Bash for Git',
}

export default function RootLayout({ children, editModal }: Layout<'editModal'>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        {editModal}
      </body>
    </html>
  )
}
