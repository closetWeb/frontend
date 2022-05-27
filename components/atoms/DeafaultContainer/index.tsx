import { ReactNode } from 'react'
import styled from 'styled-components'

export interface DefaultContainerProps {
  children?: ReactNode
}

const DefaultContainer = ( props : DefaultContainerProps ) => {
  return (
    // styled-container ex(Flex, margin, wrap?)
    <MainContainer>
      {props.children}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-right: 24px;
`

export default DefaultContainer