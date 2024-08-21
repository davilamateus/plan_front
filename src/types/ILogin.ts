export type ILogin = {
    email: string;
    password: string;
    remember: boolean;
    loading: boolean;
};

export type ILoginAction =
    | {
          type: "setEmail";
          payload: string;
      }
    | { type: "setPassword"; payload: string }
    | { type: "setRemember"; payload: boolean }
    | { type: "setLoading"; payload: boolean }
    | { type: "reset" };

export type IRegister = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    loading: boolean;
};

export type IRegisterAction =
    | {
          type: "setName" | "setEmail" | "setPassword" | "setConfirmPassword";
          payload: string;
      }
    | { type: "setLoading"; payload: boolean }
    | { type: "reset" };
