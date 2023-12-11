import React, { useEffect, useState } from 'react'
import ExchangeHistoric from '../historic'
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar'
import Axios from 'axios'
import ExchangeSimulation from '../simulation'

const ExchangeMain = () => {

    const [data, setData] = useState<number>(0);



    return (
        <div>
            <ExchangeHistoric setValue={setData} />
            <ExchangeSimulation exchangeToday={data} />
        </div>
    )
}

export default ExchangeMain