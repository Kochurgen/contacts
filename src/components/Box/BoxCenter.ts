import Box from './Box'
import styled from 'styled-components';

export default styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  > .DayPickerInput>input {
    height: 30px;
    border-radius: 5px;
    border: 2px solid rgb(18, 49, 81);
  }
`;
