import { CloseModalButton } from '@/components/CloseModalButton'
import { Modal } from '@/components/Modal'

export default function NextStepsPage() {
  return (
    <Modal className='w-1/2' isOpen>
      <div className='flex w-full justify-between p-3'>
        <h2 className='font-bold'>Next steps</h2>
        <CloseModalButton />
      </div>
      <hr className='border-[#21262d]' />
      <p className='p-3'>
        Now that you have downloaded your config, you have to move it to your home directory (~).
        <br /> <br />
        And then you must add the following line to your .bashrc or .bash_profile file:
        <br />
        <code>
          if [ -f ~/bash_aliases.sh ]; <br />
          then source ~/bash_aliases.sh <br />
          fi
        </code>
      </p>
    </Modal>
  )
}
