'use client'

import { useRouter } from 'next/navigation'

export const CloseModalButton = () => {
  const router = useRouter()

  return (
    <button
      className=''
      onClick={() => {
        router.back()
      }}
    >
      X
    </button>
  )
}
