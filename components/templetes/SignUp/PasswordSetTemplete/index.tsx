import { useState } from 'react';
import styled from 'styled-components'
import AuthContainer from '../../../atoms/AuthContainer';

const PasswordSetTemplate = () => {

  const [inputs, setInputs] = useState({
    password: "",
    passwordConfirm: "",
  });

  const { password, passwordConfirm } = inputs

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

        <SubTitle>사용하실 패스워드를 입력해주세요</SubTitle>

        {/*  Content Main */}

          {/*  emailConfirmForm : email, submit(인증하기) */}
          <Inputs>
            <Input
              onChange={onInputChange}
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호"
            />
            <Input
              onChange={onInputChange}
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="비밀번호 재입력"
            />
          </Inputs>
            <Button>비밀번호 확인</Button>
          {/*  --- emailConfirmForm  */}
        {/*  Content Main */}

      </AuthContainer>
    </main>
  )
}

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 40px;
`

const Inputs = styled.div`
  height: 151px;
  display: flex;
  flex-direction: column;

  margin-bottom: 43px;

  input:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Input = styled.input`
  height: 55px;
  border-radius: 15px;
  text-indent: 16px;
  background: #F2F2F2;
  font-size: 16px;
`
const Button = styled.button`
  height: 55px;
  background: #000000;
  border-radius: 15px;
  color: white;
  font-size: 16px;
`

export default PasswordSetTemplate