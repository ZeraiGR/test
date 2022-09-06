import { useState } from 'react';

import { Button } from '../components/Button';
import { Error } from '../components/Error';
import { StyledField } from '../components/Field';

export const Auth = ({ className }) => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('1');

  console.log(setLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ login, password });
  };

  return (
    <div className={className}>
      <h1>Autorization</h1>
      <form onSubmit={handleSubmit}>
        <StyledField name="login" type="text" value={login} setValue={setLogin} />

        <StyledField name="password" type="password" value={password} setValue={setPassword} />

        <Error>Incorrect login or password</Error>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
