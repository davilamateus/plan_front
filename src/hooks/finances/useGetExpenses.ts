import Api from "../../axios";


const useGetExpenseApi = () => {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    return async (fromDate: Number, toDate: number, type: number) => {
        const res = await Api.get(`/finances/expense?fromDate=${fromDate}&toDate=${toDate}&type=${type}`, config)
            .then((data) => {
                return data
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetExpenseApi;