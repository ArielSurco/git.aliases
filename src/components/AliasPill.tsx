interface AliasPillProps {
  value: string
}

export const AliasPill = ({ value }: AliasPillProps) => {
  return <span className='rounded bg-[#071222] px-2 text-[#848d97]'>{value}</span>
}
