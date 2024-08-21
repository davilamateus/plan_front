export type IUser = {
    name: string;
    email: string;
    photo: string;
    loaded: boolean;
};

export type IUserAction = {
    type: "set";
    payload: IUser;
};

export type IUserContext = {
    state: IUser;
    editUser: (user: IUser) => void;
};
