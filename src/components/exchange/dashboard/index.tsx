import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import './stype.scss';
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton';

const ExchangeDashboard = () => {

    const UseGetAvatar = useGetAvatar();
    const [dataValue, setDataValue] = useState<number[]>([]);
    const [loaded, setLoaded] = useState(false);

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
            setLoaded(true)

        })
    }



    const data = {
        labels: ["-6d", "-5d", "-4d", "-3d", "-2d", '-1d', 'Today'],
        datasets: [
            {
                data: dataValue.length > 0 ? dataValue : [3.2, 3.5, 3.2, 3.5, 3.5, 3.2, 3.4],
                fill: false,
                borderColor: dataValue.length > 0 ? dataValue[5] < dataValue[6] ? ' #FA385F' : '#6AD9A8' : '#dfdfdf',
                pointRadius: 1.3,
                borderWidth: 3,
                tension: 0.4,
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
                display: false,


            },
            x: {
                display: false,

            }


        },
        responsive: true
    }







    return (
        <div className='box'>
            <div style={{ width: '100%', height: '130px' }}>
                <Line style={{ position: 'absolute', marginTop: '3%' }} height={60} data={data} options={options} />
            </div>
            <div className="exchange-dashboard-texts">
                {loaded ?
                    <div>{UseGetAvatar.currency_trip} <h4 className='exchange-value' style={{ color: dataValue.length > 0 ? dataValue[5] < dataValue[6] ? ' #FA385F' : '#6AD9A8' : '#dfdfdf' }}>{dataValue[0]}</h4></div>
                    :
                    <Skeleton style={{ width: '124px', height: '18pt', }} />

                }
            </div>
        </div>
    );
}


export default ExchangeDashboard