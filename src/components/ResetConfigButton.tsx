'use client'

import { resetCommands } from '@/utils/serverActions'

export const ResetConfigButton = () => {
  const handleClick = async () => {
    await resetCommands()
    window.location.reload()
  }

  return (
    <button className='w-fit rounded-md bg-red-500 px-4 py-1 font-medium' onClick={handleClick}>
      Reset config
    </button>
  )
}
