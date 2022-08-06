import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Header = ({ children }: Props) => {
  return <header>{children}</header>
}
