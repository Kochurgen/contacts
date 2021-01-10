import React, {useEffect, useState} from 'react'
import {TextInput, TextInputMultiple} from '../components/TextInputs';
import {BoxCenter} from '../components/Box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Checkbox from '../modules/Checkbox';
import SelectBox from '../modules/SelectBox';
import {TypographyFormMarker, TypographyTitle} from '../components/Typography';
import {Container} from '../components/Containers';
import Button from '../components/Buttons/Button';
import {useHistory, useParams} from 'react-router-dom';
import http from '../services/HTTP/HTTP';
import {useDispatch, useSelector} from 'react-redux';
import {chooseUser, error} from "../services/Store/actionCreatos";
import validation from '../services/validation';

export default function () {
    const currentUser = useSelector((state: UsersState) => state.currentUser)
    const [isValid, setIsValid] = useState(false);
    const [name, setName] = useState(currentUser.first_name);
    const [lastName, setLastName] = useState(currentUser.last_name);
    const [job, setJob] = useState(currentUser.job);
    const [gender, setGender] = useState(currentUser.gender);
    const [birthday, setBirthday] = useState(currentUser.birth_date);
    const [biography, setBiography] = useState(currentUser.biography);
    const [active, setActive] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()
    let {id}: any = useParams();

    async function getUser() {
        const response = await http.get(id)
        if(!response.ok){
            dispatch(error(response))
        } else {
            let result = response.parsedBody;
            return result;
        }

    }

    function setData(result: IUser) {
        setName(result.first_name);
        setLastName(result.last_name);
        setJob(result.job);
        setGender(result.gender);
        setBirthday(result.birth_date);
        setBiography(result.biography);
        setActive(result.is_active);
    }

    useEffect(() => {
        if (id && id.indexOf(currentUser.id.toString())===-1) {
            getUser()
                .then((result: any) => {
                    if(result!==undefined){
                        dispatch(chooseUser(result));
                        setData(result);
                    }
                })
        }
        validationForm()
    }, [name, lastName,biography, job, birthday])

    function validationForm(){
        setIsValid(
            validation.isEmpty(name)
            && validation.isEmpty(lastName)
            && validation.isEmpty(biography)
            && validation.isEmpty(birthday)
            && validation.isEmpty(job)
        )
    }

    function back(){
        history.goBack()
    }

    function handleName(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        setName(value)
    }

    function handleLastName(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        setLastName(value)
    }

    function handleJob(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        setJob(value)
    }

    function handleGender(event: React.ChangeEvent<HTMLSelectElement>) {
        let value = event.target.value;
        setGender(value)
    }

    function handleBiography(event: React.ChangeEvent<HTMLTextAreaElement>) {
        let value = event.target.value;
        setBiography(value)
    }

    function getFormData() {
        const formData = new FormData();
        formData.append("last_name", lastName);
        formData.append("gender", gender);
        formData.append("birth_date", birthday);
        formData.append("first_name", name);
        formData.append("biography", biography);
        formData.append("job", job);
        formData.append("is_active", active.toString());
        return formData;
    }

    async function handleEdit() {
        const response = await http.put(id, getFormData());
        if(!response.ok){
            dispatch(error(response))
        } else {
            back();
        }
    }

    async function handleCreate() {
        const response = await http.post(getFormData());
        if(!response.ok){
            dispatch(error(response))
        } else {
            back();
        }
    }

    return (
        <Container>
            <TypographyTitle>{id ? 'Edit' : 'Create'} Contact</TypographyTitle>
            <BoxCenter>
                <TypographyFormMarker>Name</TypographyFormMarker>
                <TextInput
                    type={'text'}
                    value={name}
                    onChange={handleName}
                    maxLength={256}
                    height={'30px'}/>
                <TypographyFormMarker>Last name</TypographyFormMarker>
                <TextInput
                    type={'text'}
                    value={lastName}
                    onChange={handleLastName}
                    maxLength={256}
                    height={'30px'}/>
                <TypographyFormMarker>Birthday</TypographyFormMarker>
                <DayPickerInput
                    dayPickerProps={{
                        month: new Date(2018, 10),
                        showWeekNumbers: true,
                        todayButton: 'Today',
                    }}
                    value={birthday}
                    onDayChange={
                        (e) => {
                            if (e !== undefined)
                                setBirthday(e.toISOString().split('T')[0])
                        }
                    }
                />
                <TypographyFormMarker>Gender</TypographyFormMarker>
                <SelectBox handleChange={handleGender} value={gender} options={['male', 'female']}/>
                <TypographyFormMarker>Job</TypographyFormMarker>
                <TextInput
                    type={'text'}
                    value={job}
                    onChange={handleJob}
                    maxLength={256}
                    height={'30px'}/>
                <TypographyFormMarker>Biography</TypographyFormMarker>
                <TextInputMultiple
                    value={biography}
                    onChange={handleBiography}
                    maxLength={1024}
                    height={'60px'}/>
                <Checkbox
                    value={active}
                    title={'Active'}
                    handleChange={setActive}/>
                {
                    id ?
                    <Button disabled={!isValid} onClick={handleEdit}>Edit</Button>
                    :
                    <Button disabled={!isValid} onClick={handleCreate}>Create</Button>
                }
            </BoxCenter>
        </Container>
    )
}
