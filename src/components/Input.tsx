import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/utils/classNames'

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'rounded-md border border-[#21262d] bg-[#010409] px-3 py-1 font-normal',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'
