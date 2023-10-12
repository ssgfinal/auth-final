import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navPath } from "../assets/constant/routePath";
import { color } from "../assets/theme";
import api from "../api/api";
import { loginUrl } from "../assets/constant/urlConst";
import { useRef } from "react";
// import { useState } from "react";

const LogIn = () => {
  const navigate = useNavigate();
  //   const [login, setLogin] = useState(false);
  const authId = useRef<HTMLInputElement | null>(null);
  const authPass = useRef<HTMLInputElement | null>(null);

  const onLogIn = async () => {
    try {
      const id = authId.current?.value;
      const password = authPass.current?.value;
      const { data, status, headers } = await api.post(loginUrl.login, {
        id,
        password,
      });
      if (status === 200) {
        sessionStorage.setItem("authorization", headers.authorization);
        sessionStorage.setItem("refreshtoken", headers.refreshtoken);
        sessionStorage.setItem("nickname", data.nickname);
        sessionStorage.setItem("phone", data.phone);
      }
      navigate(navPath.authHouse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LogInWrapper>
      <LogInContainer>
        <Title>HOUS-SG</Title>
        <p>ID</p>
        <input type="text" ref={authId}></input>
        <p>PW</p>
        <input type="password" ref={authPass}></input>
        <br />
        <button onClick={onLogIn}>로그인</button>
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
    color: ${color.backColor};
    background-color: ${color.color1};
  }

  button:hover {
    cursor: pointer;
    color: ${color.backColor};
    background-color: ${color.color3};
  }
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: ${color.color1};
`;
