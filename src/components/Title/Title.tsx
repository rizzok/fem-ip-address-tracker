import { ReactNode } from 'react'
import { titleCss } from './Title.css'

interface Props {
  children?: ReactNode
}

export const Title = ({ children }: Props) => {
  return <h1 className={titleCss}>{children}</h1>
}
