import React, {useState} from 'react';
import styled from 'styled-components';
import {BoxRow} from '../../components/Box'
import {TypographyFormMarker} from '../../components/Typography';

interface ICheckbox{
    handleChange: any
    title: string
    value: boolean
}

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

export default function ({handleChange, title, value}:ICheckbox){
    function changeEvent(){
        handleChange(!value)
    }
    return (
        <BoxRow>
            <TypographyFormMarker>{title}</TypographyFormMarker>
            <Checkbox
                type={'checkbox'}
                checked={value}
                onChange={changeEvent}/>
        </BoxRow>
        )
}
