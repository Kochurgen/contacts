import * as actionTypes from './actionTypes';

export const initialState: UsersState = {
    users: [],
    currentUser: {
        last_name: '',
        id: -1,
        gender: 'male',
        birth_date: '',
        first_name: '',
        biography: '',
        job: '',
        is_active: false
    },
    error: false
};

const users = (
    state: UsersState = initialState,
    action: UserAction
): UsersState => {
    switch (action.type) {
        case actionTypes.DELETE_USER:
            const updatedUsers: IUser[] = state.users.filter(
                (user) => user.id !== action.data.id
            );
            return {
                ...state,
                users: updatedUsers
            };
        case actionTypes.ADD_USERS:
            return {
                ...state,
                users: action.data
            }
        case actionTypes.GET_USER:
            return {
                ...state,
                currentUser: action.data
            };
        case actionTypes.CLEAR_USER:
            const clearUser: IUser = {
                last_name: '',
                id: -1,
                gender: 'male',
                birth_date: '',
                first_name: '',
                biography: '',
                job: '',
                is_active: false
            };
            return {
                ...state,
                currentUser: clearUser
            }
        case actionTypes.ERROR:
            return {
                ...state,
                error: action.data
            }
    }
    return state;
};

export default users;

