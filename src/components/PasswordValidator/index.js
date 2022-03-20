// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  InnerContainer,
  Heading,
  Text,
  InputField,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)
  return (
    <MainContainer>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <InputField
          type="password"
          required
          value={password}
          onChange={onChangePassword}
        />
        <br />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </InnerContainer>
    </MainContainer>
  )
}

export default PasswordValidator
