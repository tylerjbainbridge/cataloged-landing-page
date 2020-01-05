import React from "react"

import styled, { createGlobalStyle } from "styled-components"

import "../typography.css"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
  }
`

export const HorizantalCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const VerticalCenter = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const Main = styled.div`
  position: relative;
  top: -100px;
  width: 700px;
`

const Title = styled.div`
  font-size: 120px;
  font-family: "Cooper BT";
  color: black;
  padding: 30px;
  border: 10px solid #000;

  @media (max-width: 768px) {
    font-size: 120px;
    flex-direction: column;
  }
`

const InputContainer = styled.div`
  margin-top: 50px;
`

const Button = styled.button`
  color: white;
  background-color: #ffcc5b;
  font-family: "Cooper BT";
  font-size: 25px;
  padding: 10px;
  margin-left: 20px;
  cursor: pointer;

  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const Input = styled.input`
  border: none;
  border-bottom: 5px dotted #000;
  padding: 10px;
  font-size: 20px;
  width: 400px;
  outline: none;
  font-family: "Courier New";
  letter-spacing: 3px;
  font-weight: 600;
`

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Container>
      <Main>
        <HorizantalCenter>
          <Title>Hullabaloo</Title>
        </HorizantalCenter>
        <HorizantalCenter>
          <InputContainer>
            <Input placeholder="Enter email" />
            <Button>Join waitlist</Button>
          </InputContainer>
        </HorizantalCenter>
      </Main>
    </Container>
  </>
)

export default IndexPage
