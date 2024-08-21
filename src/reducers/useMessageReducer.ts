import { IMessage, IMessageActions } from "../types/IMenssage";

export const useMessageInitialValue = {
    title: "",
    description: "",
    type: "",
    status: false
};

export const useMessageReducer = (state: IMessage, actions: IMessageActions) => {
    switch (actions.type) {
        case "login_error_wrong":
            return {
                title: "Email or password incorrect!",
                description: "You type your email or your password incorrectly.Please check your informations and try again.",
                type: "error",
                status: true
            };
        case "login_error_unconfirm":
            return {
                title: "Email not confirmed!",
                description: "You don’t confirmed your email, we emailagain, please check your box and span emails.",
                type: "atention",
                status: true
            };
        case "register_success":
            return {
                title: "User registered with success!",
                description: "All right here. Now please check your box email and your span for confirming your account.",
                type: "error",
                status: true
            };
        case "register_error_used":
            return {
                title: "Email already used!",
                description: "That email already used before. Please to choose other email and try again.",
                type: "atention",
                status: true
            };
        case "server_error":
            return {
                title: "Error",
                description: "Please to try again.",
                type: "error",
                status: true
            };
        case "new_password":
            return {
                title: "New Password",
                description:
                    "An email has been sended with instructions for getting a new password, please check your inbox and span.",
                type: "success",
                status: true
            };
        case "new_password_404":
            return {
                title: "Email not found!",
                description: "Email was not found",
                type: "error",
                status: true
            };
        case "new_password_200":
            return {
                title: "Password changed successfully!",
                description: "We changed your password and now we will redirect you to the login paget.",
                type: "success",
                status: true
            };
        case "new_password_201":
            return {
                title: "Token Used",
                description: "That token had used.",
                type: "error",
                status: true
            };

        case false:
            return useMessageInitialValue;
    }
};
