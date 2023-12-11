import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import TitleOfSession from '../../communs/titleOfSession'
import { Line } from 'react-chartjs-2'
import './stype.scss';
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';
import Axios from 'axios'

interface types {
    setValue: Dispatch<SetStateAction<number>>;
}

const ExchangeHistoric = ({ setValue }: types) => {

    const UseGetAvatar = useGetAvatar();
    const [dataValue, setDataValue] = useState<number[]>([]);

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
            setDataValue(array.reverse())
            setValue(array[0]);

        })
    }



    const data = {
        labels: ["-6d", "-5d", "-4d", "-3d", "-2d", '-1d', 'Today'],
        datasets: [
            {
                data: dataValue.length > 0 ? dataValue : [3.2, 3.5, 3.2, 3.5, 3.5, 3.2, 3.4],
                fill: false,
                borderColor: dataValue.length > 0 ? dataValue[5] < dataValue[6] ? ' #FA385F' : '#6AD9A8' : '#dfdfdf',
                pointRadius: 3,
                pointBackgroundColor: '#6AD9A8',
                borderWidth: 4,
                tension: 0.4,
                backgroundColor: 'rgba(106,217,168,0.03323266806722693)'
            },

        ]
    };

    const options = {

        plugins: {
            labels: {
                display: false,
            },
            legend: {
                display: false,
            },

        },
        scales: {
            y: {
                display: true,


            },
            x: {
                display: true,

            }


        },
    }







    return (
        <div>
            <TitleOfSession title='Historic' />
            <div className='box web' style={{ width: 'auto', padding: '16px' }}>
                <Line height={100} data={data} options={options} />
            </div>
            <div className='box mobile' style={{ width: 'auto', padding: '16px' }}>
                <Line height={300} data={data} options={options} />
            </div>
        </div>
    );
}


export default ExchangeHistoric