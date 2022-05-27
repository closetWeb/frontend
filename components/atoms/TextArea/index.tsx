import styled from "styled-components"

export interface TextAreaProps {
  placeholder: string
}

const Textarea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <>
      <Frame placeholder={placeholder}/>
    </>
  )
}

const Frame = styled.textarea`
    background: #F2F2F2;
    border-radius: 15px;

    placeholder: ${props => props.placeholder}

`

export default Textarea