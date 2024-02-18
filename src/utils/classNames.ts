type ClassName = string | undefined | null | false

export const cn = (...classNames: ClassName[]) => {
  return classNames.filter(Boolean).join(' ')
}
