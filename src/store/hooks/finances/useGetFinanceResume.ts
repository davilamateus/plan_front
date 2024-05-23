import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetFinanceResumeApi } from '../../../hooks/finances/resume/useGetResume';


export const useGetFinanceResume = () => {

    const getFinanceResume = useSelector((state: any) => state.financeResumeState);
    const [financeResume, setFinanceResume] = useState(getFinanceResume);
    const UseGetFinanceResumeApi = useGetFinanceResumeApi();
    useEffect(() => {
        if (!getFinanceResume.financeResume) {
            UseGetFinanceResumeApi()
        }
        setFinanceResume(getFinanceResume.financeResume)
    }, [getFinanceResume])

    return financeResume;

}


