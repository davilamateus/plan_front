import React, { useEffect, useState } from 'react'
import ExchangeHistoric from '../historic'
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar'
import Axios from 'axios'
import ExchangeSimulation from '../simulation'

const ExchangeMain = () => {

    const UseGetAvatar = useGetAvatar();
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        if (UseGetAvatar.currency_local) {
            getCurrency()
        }

    }, [UseGetAvatar])

    function getCurrency() {
        Axios.get(`https://economia.awesomeapi.com.br/json/daily/${UseGetAvatar.currency_trip}-${UseGetAvatar.currency_local}/7`).then((data: any) => {
            let array: number[] = []

            data.data.map((item: any) => {
                array.push((+item.high))
            })
            setData(array.reverse())

        })
    }

    return (
        <div>
            <ExchangeHistoric values={data} />
            <ExchangeSimulation exchangeToday={data[0]} currency_local={UseGetAvatar.currency_local} currency_trip={UseGetAvatar.currency_trip} />
        </div>
    )
}

export default ExchangeMain