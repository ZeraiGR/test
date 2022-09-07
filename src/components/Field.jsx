import styled from 'styled-components';

import { Label } from './Label';
import { Input } from './Input';

const Field = ({ className, name, type, value, setValue }) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const StyledField = styled(Field)`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;
