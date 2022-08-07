import { ReactNode } from 'react'
import { headerCss } from './Header.css'

interface Props {
  children?: ReactNode
}

export const Header = ({ children }: Props) => {
  return <header className={headerCss}>{children}</header>
}
