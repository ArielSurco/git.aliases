'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Back = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return null
}
