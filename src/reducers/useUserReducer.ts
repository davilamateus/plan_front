import { IUser, IUserAction } from "../types/IUser";

export const useUserInitialValue = { name: "", email: "", photo: "", loaded: false };

export const useUserReducer = (state: IUser, action: IUserAction) => {
    switch (action.type) {
        case "set":
            return { ...action.payload, loaded: true };

        default:
            return state;
    }
};
