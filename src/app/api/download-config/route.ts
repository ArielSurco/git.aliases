import fs from 'fs'

import { cookies } from 'next/headers'

import { Command, commands as defaultCommands } from '@/constants/Commands'

export async function GET() {
  const commandsCookie = cookies().get('commands')
  const commands: Command[] = commandsCookie ? JSON.parse(commandsCookie.value) : defaultCommands

  const dependencies = commands
    .map(({ dependencies }) => dependencies)
    .flat()
    .filter(Boolean)

  const noRepeatedDependencies = [...new Set(dependencies)]

  // Get the content of all commands by their id, looking for the file with this structure: src/scripts/git/{id}.sh
  const commandFiles = commands.map(({ id }) => {
    return fs.readFileSync(`src/scripts/git/${id}.sh`, 'utf8')
  })

  const aliasReplacedFiles = commandFiles.map((file, index) => {
    return file
      .replace(/alias\s(\w+)/, `alias ${commands[index].alias}`)
      .replace(/__git_complete\s\w+\s/, `__git_complete ${commands[index].alias} `)
  })

  // Get the content of all dependencies by their id, looking for the file with this structure: src/scripts/git/dependencies/{id}.sh
  const dependenciesFiles = noRepeatedDependencies.map((id) => {
    return fs.readFileSync(`src/scripts/git/dependencies/${id}.sh`, 'utf8')
  })

  // Create a new file with the content of all commands
  const fileContent = [...dependenciesFiles, ...aliasReplacedFiles].join('\n\n')

  return new Response(fileContent, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  })
}
