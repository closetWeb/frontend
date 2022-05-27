import styled from 'styled-components'

import DefaultLayout from '../../atoms/DefaultLayout'

const CommunityTemplate = () => {
  return (
    <DefaultLayout>
      {/*  AppHeader : Closet  */}
      <main>
        <CommunityContainer>
          
          {/*  scroll post 
            회원 정보
            사진 or 옷
            좋아요
          */}

          {/* Navigation Bar? .. */}
        </CommunityContainer>
      </main>
    </DefaultLayout>
  )
}

//community엔 기본 Container의 margin이 없기에 따로 구성
const CommunityContainer = styled.div`
`

export default CommunityTemplate