import {useHistory, useParams} from 'react-router-dom';
import {Container} from '../components/Containers';
import {BoxColumn, BoxRow, BoxCenter} from '../components/Box';
import {TypographyFormMarker, TypographyTitle} from '../components/Typography';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';
import Button from '../components/Buttons/Button';
import http from '../services/HTTP/HTTP';
import {chooseUser} from '../services/Store/actionCreatos';
import {error} from '../services/Store/actionCreatos';

export default function () {
    const currentUser = useSelector((state: UsersState) => state.currentUser)
    const dispatch = useDispatch();
    const history = useHistory();
    let {id}: any = useParams();
    async function selectUser(){
        const response = await http.get(id)
        if(!response.ok){
            dispatch(error(response))
        } else {
            return response.parsedBody;
        }
    }
    function handleEditButton(){
        history.push('/edit/'+id)
    }

    async function handleDelete(){
        const response = await http.delete(id)
        if(!response.ok){
            dispatch(error(response))
        } else {
            history.goBack();
        }


    }

    useEffect(()=>{
        selectUser().then((result:any)=>dispatch(chooseUser(result)))
    }, [])
    return <Container>
        <BoxCenter>
            <BoxColumn>
                <TypographyTitle>Contact {id}</TypographyTitle>
                <BoxRow>
                    <TypographyFormMarker
                        color={'#545151'}>Name: <TypographyFormMarker>{currentUser?.first_name}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
                <BoxRow>
                    <TypographyFormMarker color={'#545151'}>Last
                        Name: <TypographyFormMarker>{currentUser?.last_name}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
                <BoxRow>
                    <TypographyFormMarker
                        color={'#545151'}>Job: <TypographyFormMarker>{currentUser?.job}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
                <BoxRow>
                    <TypographyFormMarker
                        color={'#545151'}>Birthday: <TypographyFormMarker>{currentUser?.birth_date}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
                <BoxRow>
                    <TypographyFormMarker
                        color={'#545151'}>Gender: <TypographyFormMarker>{currentUser?.gender}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
                <BoxRow>
                    <TypographyFormMarker
                        color={'#545151'}>Biography: <TypographyFormMarker>{currentUser?.biography}</TypographyFormMarker></TypographyFormMarker>
                </BoxRow>
            </BoxColumn>
            <Button onClick={handleEditButton}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </BoxCenter>
    </Container>
}
