import styled from 'styled-components';
interface ITextInputMultiple{
    height: string
}

export default styled.textarea<ITextInputMultiple>`
  height: ${(props: any) => props.height ? props.height : '100%'};
  border-radius: 5px;
  border: 2px solid rgb(18, 49, 81);
`;
