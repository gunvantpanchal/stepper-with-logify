import React from "react";
import styled from "styled-components";

const index = ({ onLogin }) => {
  return (
    <SigninWrapper>
      <center>
        <button onClick={onLogin} className="button_div">
          Signup / Login
        </button>
      </center>
    </SigninWrapper>
  );
};

export default index;

const SigninWrapper = styled.div`
  width: 99vw;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;

  .button_div {
    width: 200px;
    height: 100px;
    background-color: #add8e6;
  }
`;
