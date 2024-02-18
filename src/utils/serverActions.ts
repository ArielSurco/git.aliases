'use server'

import { cookies } from 'next/headers'

import { Command, commands as defaultCommands } from '@/constants/Commands'

export const editAlias = async (commandId: string, newAlias: string) => {
  const commandsCookie = cookies().get('commands')
  const commands: Command[] = commandsCookie ? JSON.parse(commandsCookie.value) : defaultCommands
  const command = commands.find((command: { id: string }) => command.id === commandId)

  if (command) {
    command.alias = newAlias
  }

  cookies().set('commands', JSON.stringify(commands))
}

export const resetCommands = async () => {
  cookies().set('commands', JSON.stringify(defaultCommands))
}
