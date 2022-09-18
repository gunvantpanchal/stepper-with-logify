import React from "react";
import styled from "styled-components";

const index = ({ onLogin }) => {
  return (
    <SigninWrapper>
      <div>LOGIFY</div>
      <div className="outer_div">
        <button onClick={onLogin} className="button_div">
          Signup / Login
        </button>
      </div>
    </SigninWrapper>
  );
};

export default index;

const SigninWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  flex-direction: column;
  font-size: 32px;
  gap: 20px;
  .outer_div {
    width: 80vh;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 4px solid #add8e6;
  }
  .button_div {
    width: 200px;
    height: 100px;
    background-color: #add8e6;
    font-size: larger;
    border-radius: 6px;
    border: 2px solid black;
    font-size: 20px;
  }
`;
