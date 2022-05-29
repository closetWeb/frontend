import { useState } from 'react';
import styled from 'styled-components'

const LoginTemplate = () => {

  const [loginInformation, setloginInformation] = useState({
    email: "",
    password: ""
  });
  
  return (
    <main>
      <LoginContainer>

        <Heading>Closet</Heading>
        <SubTitle>오늘은 어떤 옷을 보러 왔나요?</SubTitle>

        {/*  Content Main */}

          {/*  emailConfirmForm : email, submit(인증하기) */}
          
            <Input 
              type="email"
              name="email"
              value={loginInformation.email}
              placeholder="이메일"
            />
            <Input 
              type="password"
              name="password"
              value={loginInformation.password}
              placeholder="비밀번호"
            />
            <LoginButton>로그인</LoginButton>

          {/*  --- emailConfirmForm  */}

          <Anchors>
            <a>비밀번호 찾기</a>
            <AnchorDivider> | </AnchorDivider>
            <a>회원가입</a>
          </Anchors>
          
        {/*  Content Main */}

      </LoginContainer>
    </main>
  )
}

const Anchors = styled.div`
  display: flex;
  justify-content: center;
`

const AnchorDivider = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`
const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 193px 24px 0 24px;
`

const Heading = styled.div`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

`

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`

const LoginButton = styled.button`
  height: 55px;
  background: #000000;
  border-radius: 15px;
  color: white;
`

const Input = styled.input`
  height: 55px;
  border-radius: 15px;
  text-indent: 16px;
  background: #F2F2F2;
`

export default LoginTemplate