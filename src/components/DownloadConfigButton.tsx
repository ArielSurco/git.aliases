'use client'

export const DownloadConfigButton = () => {
  const handleClick = async () => {
    const response = await fetch('/api/download-config', {
      method: 'GET',
    })

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = '.bashrc'
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  }

  return (
    <button
      className='ms-auto w-fit rounded-md bg-[#238636] px-4 py-1 font-medium'
      onClick={handleClick}
    >
      Download config file
    </button>
  )
}
