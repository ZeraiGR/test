import styled from 'styled-components';

const Field = ({ className, name, type, value, setValue }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{name}</label>
      <input
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
  gap: 25px;
`;
