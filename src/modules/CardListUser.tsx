import {TypographyDecryption} from '../components/Typography';
import {BoxColumn, BoxRow} from '../components/Box';
import {ListItem} from '../components/List';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Buttons/Button';
import React from 'react';
import http from '../services/HTTP';
import {useDispatch} from 'react-redux';
import {deleteUser, error} from '../services/Store/actionCreatos';

const BoxButton = styled(BoxColumn)`
  flex: 1;
  align-items: flex-end;
`

interface ICard {
    user: IUser
    key: number
}

export default function CardListUser({user}:ICard) {
    const dispatch = useDispatch()
    let history = useHistory();

    function handleClick() {
        history.push("/details/" + user.id);
    }

    async function handleDelete() {
        const response = await http.delete(user.id.toString());
        if (!response.ok){
            dispatch(error(response))
        } else {
            dispatch(deleteUser(user))
        }
    }

    return <ListItem>
        <BoxRow>
            <BoxColumn onClick={handleClick}>
                <BoxRow>
                    <TypographyDecryption
                        color={'#545151'}>Name: <TypographyDecryption>{user.first_name}</TypographyDecryption>
                    </TypographyDecryption>
                </BoxRow>
                <BoxRow>
                    <TypographyDecryption color={'#545151'}>Last
                        Name: <TypographyDecryption>{user.last_name}</TypographyDecryption>
                    </TypographyDecryption>
                </BoxRow>
                <BoxRow>
                    <TypographyDecryption
                        color={'#545151'}>Birthday: <TypographyDecryption>{user.birth_date}</TypographyDecryption>
                    </TypographyDecryption>
                </BoxRow>
                <BoxRow>
                    <TypographyDecryption
                        color={'#545151'}>Gender: <TypographyDecryption>{user.gender}</TypographyDecryption>
                    </TypographyDecryption>
                </BoxRow>
            </BoxColumn>
            <BoxButton>
                <Button onClick={handleDelete}>Delete</Button>
            </BoxButton>
        </BoxRow>
    </ListItem>
}
