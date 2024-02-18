import type { ReactNode } from 'react'

import { cn } from '@/utils/classNames'

export interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
}

export const Modal = ({ className, isOpen, children }: ModalProps) => {
  return isOpen ? (
    <div className={'fixed left-0 top-0 grid h-screen w-screen place-items-center bg-[#00000050]'}>
      <div className={cn('rounded-md bg-[#0d1117]', className)} role='dialog'>
        {children}
      </div>
    </div>
  ) : null
}
