import { ReactNode } from "react"
import styled from "styled-components"

export interface ButtonProps {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = (p: ButtonProps) => {
  return (
    <>
      <ButtonBox>{p.children}</ButtonBox>
    </>
  )
}

const ButtonBox = styled.button`
  height: 55px;
  background: #000000;
  border-radius: 15px;
  color: white;
`

export default Button