import { cn } from '@/utils/classNames'

import { AliasPill } from './AliasPill'

interface StaticInputProps {
  className?: string
  value: string
  onFocus?: () => void
}

export const StaticInput = ({ className, value, onFocus }: StaticInputProps) => {
  return (
    <div
      className={cn(
        'rounded-md border border-[#21262d] bg-[#010409] px-3 py-1',
        onFocus && 'cursor-text',
        className,
      )}
      onClick={onFocus}
    >
      <AliasPill value={value} />
    </div>
  )
}
