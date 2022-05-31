import { useState } from 'react';
import styled from 'styled-components'
import AuthContainer from '../../atoms/AuthContainer';
import Link from 'next/link';

const LoginTemplate = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return (
    <main>
      <AuthContainer>

        <Heading>Closet</Heading>
        <SubTitle>오늘은 어떤 옷을 보러 왔나요?</SubTitle>

        {/*  Content Main */}

          {/*  emailConfirmForm : email, submit(인증하기) */}
            <Input
              onChange={onInputChange}
              type="email"
              name="email"
              value={email}
              placeholder="이메일"
            />
            <Input
              onChange={onInputChange}
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호"
            />
            <Button>로그인</Button>
          {/*  --- emailConfirmForm  */}

          <Anchors>
            <Link href="/" passHref><Anchor>비밀번호 찾기</Anchor></Link>
            <AnchorDivider> | </AnchorDivider>
            <Link href="/signUp/emailVerify" passHref><Anchor>회원가입</Anchor></Link>
          </Anchors>
          
        {/*  Content Main */}

      </AuthContainer>
    </main>
  )
}

const Anchor = styled.a`
  color: #585858;
  font-size: 14px
`

const Anchors = styled.div`
  display: flex;
  justify-content: center;
`

const AnchorDivider = styled.div`
  margin-left: 10px;
  margin-right: 10px;
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

  margin-bottom: 50px;
`

const Input = styled.input`
  height: 55px;
  border-radius: 15px;
  text-indent: 16px;
  background: #F2F2F2;
  font-size: 16px;

  margin-bottom: 16px;
`
const Button = styled.button`
  height: 55px;
  background: #000000;
  border-radius: 15px;
  color: white;
  font-size: 16px;

  margin-top: 34px;
  margin-bottom: 23px;
`

export default LoginTemplate