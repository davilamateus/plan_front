import Api from "../../axios";



const useConfirmEmail = () => {

    return async (token: string) => {
        const res = await Api.patch(`/confirmemail/${token}`).then((data) => {
            return data;
        })
        return res;
    }

}

export default useConfirmEmail;