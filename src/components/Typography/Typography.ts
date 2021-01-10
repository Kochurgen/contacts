import styled from 'styled-components';

interface ITypography {
    color?: string
}

export default styled.label<ITypography>`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${(props: any)=>(props.color? props.color: '#000000')};
`;
