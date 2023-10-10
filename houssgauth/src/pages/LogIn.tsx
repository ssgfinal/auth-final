import styled from "styled-components";
// import { useState } from "react";

const LogIn = () => {
  //   const [login, setLogin] = useState(false);

  const onLogIn = () => {
    // console.log(login);
    // setLogin(true);
  };

  return (
    <LogInWrapper>
      <LogInContainer>
        <Title>HOUS-SG</Title>
        <p>ID</p>
        <input type="text"></input>
        <p>PW</p>
        <input type="text"></input>
        <br />
        <button onClick={onLogIn}>로그인하기</button>
      </LogInContainer>
    </LogInWrapper>
  );
};

export default LogIn;

const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInContainer = styled.div`
  input {
    outline: none;
    padding: 0.3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
  }
  button {
    border: none;
    border-radius: 0.5rem;
    margin: 2rem;
    padding: 0.5rem;
    color: white;
    background-color: #845ec2;
  }

  button:hover {
    cursor: pointer;
    color: white;
    background-color: #a973ff;
  }
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #845ec2;
`;
