import { useState } from 'react';
import styled from 'styled-components'
import AuthContainer from '../../../atoms/AuthContainer';

const LoginTemplate = () => {

  const [inputs, setInputs] = useState({
    email: "",
    certCode: "",
  });

  const { email, certCode } = inputs

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [submitLevel, setSubmitLevel] = useState(1)

  const onSubmit = () => {
    submitLevel === 2
    ? setSubmitLevel(1)
    : setSubmitLevel(submitLevel + 1)
    console.log(submitLevel)
  }

  return (
    <main>
      <AuthContainer>

        {
          submitLevel === 1 
          ? <SubTitle>사용하실 이메일을 입력해주세요</SubTitle>
          : <SubTitle>
              입력하신 이메일로
              인증번호를 발송했어요
            </SubTitle>  
        }
        

        {/*  Content Main */}

          {/*  emailConfirmForm : email, submit(인증하기) */}
          <Inputs>
            <Input
              onChange={onInputChange}
              type="email"
              name="email"
              value={email}
              placeholder="이메일"
            />
            {
              submitLevel === 2
              ? <Input
                  onChange={onInputChange}
                  type="text"
                  name="certCode"
                  value={certCode}
                  placeholder="인증 코드"
                />
              : null
            }
          </Inputs>
          <Button onClick={onSubmit}>이메일 인증하기</Button>
          {/*  --- emailConfirmForm  */}
        {/*  Content Main */}

      </AuthContainer>
    </main>
  )
}
const Inputs = styled.div`
  height: 151px;
  display: flex;
  flex-direction: column;

  margin-bottom: 43px;

  input:not(:last-child) {
    margin-bottom: 16px;
  }
`

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 40px;
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

export default LoginTemplate