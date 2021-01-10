import styled from 'styled-components';
import React from 'react';

interface ISelectBox {
    options: string[]
    handleChange: any,
    value: string
}

const SelectBox = styled.select`
  height: 38px;
  border-radius: 5px;
  border: 2px solid rgb(18, 49, 81);
`

export default function ({options, handleChange, value}: ISelectBox) {
    return (
        <SelectBox value={value} onChange={handleChange}>
            {
                options.map(
                    (item: string, index) =>
                        (<option value={item} key={index}>{item}</option>)
                )
            }
        </SelectBox>
    )
}
