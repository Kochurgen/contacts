import * as actionTypes from './actionTypes';

export function error(data: any) {
    const action: UserAction = {
        type: actionTypes.ERROR,
        data
    };
    return action
}

export function deleteUser(data: IUser) {
    const action: UserAction = {
        type: actionTypes.DELETE_USER,
        data
    };
    return action
}

export function chooseUser(data: IUser) {
    const action: UserAction = {
        type: actionTypes.GET_USER,
        data
    };
    return action
}

export function clearUser() {
    const action: UserAction = {
        type: actionTypes.CLEAR_USER,
        data: {}
    };
    return action
}

export function addUsers(data: any) {
    const action: UserAction = {
        type: actionTypes.ADD_USERS,
        data
    };
    return action
}
