// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InnerContainer = styled.div`
  background-color: #383a4e;
  height: 250px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`
export const Text = styled.p`
  color: white;
`
export const InputField = styled.input`
  outline: none;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  padding: 5px 10px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`
