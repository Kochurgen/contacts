import {Container} from '../components/Containers';
import {useSelector, useDispatch} from 'react-redux';
import CardListUser from '../modules/CardListUser';
import {List} from '../components/List'
import {useHistory} from 'react-router-dom';
import Button from '../components/Buttons/Button';
import {BoxRow} from '../components/Box';
import http from '../services/HTTP/HTTP';
import {useEffect} from 'react';
import {addUsers, clearUser} from '../services/Store/actionCreatos';

export default function () {
    const users = useSelector((state: UsersState) => state.users)
    const history = useHistory();
    const dispatch = useDispatch();
    async function getContent(){
        const response = await http.get()
        console.log(response)
        return response.parsedBody;
    }
    useEffect(()=>{
        getContent()
            .then(
            (result:any)=>{dispatch(addUsers(result))}
        );
    },[])

    return (
        <Container>
            <BoxRow>
                <Button onClick={() => {
                    dispatch(clearUser())
                    history.push('/create')
                }}>Add User</Button>
            </BoxRow>
            <List>
                {users.map((user: IUser, index) => (<CardListUser user={user}  key={index}/>))}
            </List>
        </Container>
    )
}
