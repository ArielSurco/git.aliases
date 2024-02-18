import { cookies } from 'next/headers'

import { Command } from '@/constants/Commands'
import { Page } from '@/types/Components'

export default function EditModalPage({ params }: Page<'id'>) {
  const commandsCookie = cookies().get('commands')
  const commands: Command[] = commandsCookie ? JSON.parse(commandsCookie.value) : []
  const command = commands.find((c) => c.id === params.id)

  if (!command) return null

  // return <EditModal command={command} isOpen />
  return null
}
