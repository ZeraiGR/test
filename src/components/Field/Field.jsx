import styled from 'styled-components';

import { Label, Input } from './components';

const _Field = ({ className, name, type, value, setValue, pass }) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{name}</Label>
      <Input
        pass={pass}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Field = styled(_Field)`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  @media (max-width: 630px) {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
`;
