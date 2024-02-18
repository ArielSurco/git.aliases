import { cookies } from 'next/headers'

import { AliasField } from '@/components/AliasField'
import { DownloadConfigButton } from '@/components/DownloadConfigButton'
import { ResetConfigButton } from '@/components/ResetConfigButton'
import { Command } from '@/constants/Commands'

export default function Home() {
  const commandsCookie = cookies().get('commands')
  const userCommands: Command[] = commandsCookie ? JSON.parse(commandsCookie.value) : []

  return (
    <main className='flex min-h-screen w-full flex-col gap-4 p-10'>
      <h1 className='text-2xl'>Git aliases</h1>
      <div className='flex flex-col gap-3 rounded-md border border-[#30363d] p-4'>
        <div className='grid grid-cols-3 font-semibold'>
          <p>Command</p>
          <p>Description</p>
          <p>Alias</p>
        </div>
        <hr className='border-[#21262d]' />
        {userCommands.map(({ id, name, alias, description }) => (
          <AliasField alias={alias} description={description} id={id} key={id} name={name} />
        ))}
      </div>
      <div className='ms-auto flex gap-3'>
        <ResetConfigButton />
        <DownloadConfigButton />
      </div>
    </main>
  )
}
