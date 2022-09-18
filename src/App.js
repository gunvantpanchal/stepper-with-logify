import React from 'react';
import { useLogify } from "react-logify";
import styled from 'styled-components';
import StepForm from './components/StepForm';
import Signin from './components/Signin';

const App = () => {
  const { user, onLogin, onLogout } = useLogify();

  return (
    <AppWrapper>
      {!user.id && <Signin onLogin ={onLogin}/>}
      {user.id && <StepForm userName={user?.name} onLogout={onLogout} />}
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  .user_div {
    float: right;
    margin: 50px
  }
`;