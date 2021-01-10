interface IUser {
    id: number
    first_name: string
    last_name: string
    birth_date: string
    gender: string
    job: string
    biography: string
    is_active: boolean
}

interface HttpResponse<T> extends Response {
    parsedBody?: T;
}
interface IAppState {
    usersState: UsersState;
}

type ErrorState = {
    error: any
    errorInfo: any
}

type UsersState = {
    users: IUser[];
    currentUser: IUser
    error?:any
};

type UserAction = {
    type: string;
    data: any;
};

type DispatchType = (args: UsersAction) => UsersAction;
