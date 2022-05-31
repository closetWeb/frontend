import { useState } from 'react';
import styled from 'styled-components'
import AuthContainer from '../../../atoms/AuthContainer';

const ProfileSetTemplate = () => {

  const [inputs, setInputs] = useState({
    gender: "",
    nickname: "",
    height: "",
    weight: "",
  });

  const { gender, nickname, height, weight } = inputs

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

        <SubTitle>거의 다 왔어요!</SubTitle>

        {/*  emailConfirmForm : email, submit(인증하기) */}
        <SelectGender>
          <Button type='button'>남자</Button>
          <Button type='button'>여자</Button>
          <Button type='button'>비공개</Button>
        </SelectGender>
        <Input
            onChange={onInputChange}
            type="text"
            name="nickname"
            value={nickname}
            placeholder="사용하실 닉네임을 입력해주세요"
        />
        <BodyInformation>
          <Input
            onChange={onInputChange}
            type="number"
            name="height"
            value={height}
            placeholder="키"
          />
          <Input
            onChange={onInputChange}
            type="number"
            name="weight"
            value={weight}
            placeholder="몸무게"
          />
        </BodyInformation>
        <Button>다음</Button>
        {/*  --- emailConfirmForm  */}

      </AuthContainer>
    </main>
  )
}

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 40px;
`

const SelectGender = styled.div`
  display: flex;
  
  margin-bottom: 24px;

  button:not(:last-child) {
    margin-right: 9px;
  }
`

const BodyInformation = styled.div`
  display: flex;

  margin-top: 24px;
  margin-bottom: 40px;

  input:not(:last-child) {
    margin-right: 16px;
  }
`

const Input = styled.input`
  height: 55px;
  border-radius: 15px;
  text-indent: 16px;
  background: #F2F2F2;
  font-size: 16px;

  width: ${(props) => props.type === 'number' ? '163px' : 'auto'};
  padding: 0;
`
const Button = styled.button`
  height: 55px;
  background: #000000;
  border-radius: 15px;
  color: white;
  font-size: 16px;

  width: ${(props) => props.type === 'button' ? '108px' : 'auto'};
`

export default ProfileSetTemplate