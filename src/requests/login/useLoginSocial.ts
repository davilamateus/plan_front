import Api from "../../axios";

function useLoginSocial() {
    return async (email: string, name: string, socialId: string) => {
        const body = { email: email, socialId: socialId, name: name };
        return await Api.post("/login/social", body)
            .then((data) => {
                return data;
            })
            .catch((error) => {
                return error;
            });
    };
}

export default useLoginSocial;
