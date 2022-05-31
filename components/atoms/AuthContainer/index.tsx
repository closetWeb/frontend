import { ReactNode } from 'react'
import styled from 'styled-components'

export interface AuthContainerProps {
  children?: ReactNode
}

const AuthContainer = ( props : AuthContainerProps ) => {
  return (
    // styled-container ex(Flex, margin, wrap?)
    <MainContainer>
      {props.children}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 124px 24px 0 24px;
`


export default AuthContainer