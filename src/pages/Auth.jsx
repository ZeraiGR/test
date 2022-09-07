import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { loginAC, resetErrorAC } from '../store/reducers/auth';

import { Title } from '../components/TItle';
import { Button } from '../components/Button';
import { Error } from '../components/Error';
import { StyledField } from '../components/Field';
import { selectIsError } from '../store/selectors/auth';
import styled from 'styled-components';

const _Auth = ({ className }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const handleLogin = (login) => {
    dispatch(resetErrorAC());
    setLogin(login);
  };

  const handlePassword = (password) => {
    dispatch(resetErrorAC());
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { login, password };
    dispatch(loginAC(formData));
  };

  return (
    <div className={className}>
      <Title>Autorization</Title>
      <form onSubmit={handleSubmit}>
        <StyledField name="login" type="text" value={login} setValue={handleLogin} />

        <StyledField name="password" type="password" value={password} setValue={handlePassword} />

        {isError && <Error>Incorrect login or password!</Error>}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export const Auth = styled(_Auth)`
  max-width: 480px;
  width: 100%;
  padding: 40px 14px 25px;
  border: 5px solid #27569c;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px #00000040;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
