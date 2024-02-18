'use client'

import { useRouter } from 'next/navigation'

export const DownloadConfigButton = () => {
  const router = useRouter()

  const handleClick = async () => {
    const response = await fetch('/api/download-config', {
      method: 'GET',
    })

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = 'bash_aliases.sh'
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()

    router.push('/next-steps')
  }

  return (
    <button className='w-fit rounded-md bg-[#238636] px-4 py-1 font-medium' onClick={handleClick}>
      Download config file
    </button>
  )
}
