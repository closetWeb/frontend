import styled from "styled-components"

export interface InputProps {
  type: string
  name: string
  value: string
  placeholder: string
}

const Input: React.FC<InputProps> = (p: InputProps) => {
  return (
    <>
      <InputBox 
        type={p.type}
        name={p.name}
        value={p.value}
        placeholder={p.placeholder}
      />
    </>
  )
}

const InputBox = styled.input`
  height: 55px;
  border-radius: 15px;
  text-indent: 16px;
  background: #F2F2F2;
`

export default Input