import styled from 'styled-components';

export default styled.li`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(18, 49, 81);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  margin: 5px;
  padding: 10px;

  &:active {
    outline: none;
    border: 2px solid rgb(31, 83, 134);
  }
`;
