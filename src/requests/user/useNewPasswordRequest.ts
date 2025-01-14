import Api from "../../axios";

export const useNewPasswordCreateCode = () => {
	return async (email: string) => {
		const res = await Api.post(`/forgetpassword`, { email: email })
			.then((data) => {
				return data;
			})
			.catch((error) => console.log(error));
		return res;
	};
};

export const useNewPasswordCheckedCode = () => {
	return async (token: string) => {
		const res = await Api.get(`/newpassword/${token}`)
			.then((data) => {
				return data;
			})
			.catch((error) => console.log(error));
		return res;
	};
};

export const useNewPassword = () => {
	return async (token: string, password: string) => {
		const res = await Api.patch(`/newpassword`, {
			token: token,
			password: password,
		})
			.then((data) => {
				return data;
			})
			.catch((error) => console.log(error));
		return res;
	};
};
