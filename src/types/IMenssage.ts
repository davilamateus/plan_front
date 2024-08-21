export type IMessage = {
    title: string;
    description: string;
    type: string;
    status: boolean;
};

export type IMessageActions = {
    type:
        | "server_error"
        | "login_error_wrong"
        | "login_error_unconfirm"
        | "register_success"
        | "register_error_used"
        | "new_password"
        | "new_password_404"
        | "new_password_200"
        | "new_password_201"
        | false;
};
