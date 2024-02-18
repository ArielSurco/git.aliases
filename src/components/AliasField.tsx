import { Command } from '@/constants/Commands'

import { AliasInput } from './AliasInput'

interface AliasFieldProps extends Pick<Command, 'id' | 'name' | 'alias' | 'description'> {}

export const AliasField = ({ id, name, alias, description }: AliasFieldProps) => {
  return (
    <div className='grid grid-cols-3 items-center'>
      <p>{name}</p>
      <p>{description}</p>
      <AliasInput aliasId={id} initialValue={alias} />
    </div>
  )
}
