import DefaultContainer from '../../atoms/DeafaultContainer'
import Textarea from '../../atoms/TextArea'

const LoginTemplate = () => {
  
  return (
    <main>
      <DefaultContainer>

        {/*  Content Header / sub title  : 사용할 이메일을 ~~ */}

        {/*  Content Main */}

          {/*  emailConfirmForm : email, submit(인증하기) */}
          
          <form>
            <Textarea placeholder='email'/>
            <Textarea placeholder='비밀번호'/>
          </form>


          {/*  --- emailConfirmForm  */}

          {/* 비밀번호 찾기 | 회원가입 -> Atom/Anchor? */}
          
        {/*  Content Main */}

      </DefaultContainer>
    </main>
  )
}

export default LoginTemplate