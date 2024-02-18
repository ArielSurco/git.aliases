'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/utils/classNames'
import { editAlias } from '@/utils/serverActions'

import { Input } from './Input'
import { StaticInput } from './StaticInput'

interface AliasInputProps {
  aliasId: string
  initialValue: string
}

export const AliasInput = ({ aliasId, initialValue }: AliasInputProps) => {
  const [value, setValue] = useState<string>(initialValue ?? '')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)

  const saveAlias = async () => {
    await editAlias(aliasId, value)

    router.refresh()
  }

  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.focus()
    }

    if (!isFocused && !value) {
      setValue(initialValue)
    }
  }, [isFocused])

  if (isFocused) {
    return (
      <div>
        <Input
          className={cn('w-full', error && 'border border-red-500')}
          onBlur={() => {
            if (value.includes(' ')) {
              return
            }

            setIsFocused(false)

            if (!!value && value !== initialValue) {
              saveAlias()
            }
          }}
          onChange={(e) => {
            if (e.target.value.includes(' ')) {
              setError('Alias cannot contain spaces')
            } else {
              setError('')
            }

            setValue(e.target.value)
          }}
          ref={inputRef}
          type='text'
          value={value}
        />
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    )
  }

  return <StaticInput onFocus={() => setIsFocused(true)} value={value} />
}
