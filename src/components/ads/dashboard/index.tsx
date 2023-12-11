import GetTimestampInfomartions from "../../../functions/date/GetTimestampInfomartions";
import useGetAvatar from "../../../store/hooks/avatar/useGetAvatar";
import ButtonSimple from "../../communs/buttons/simple/simple";

import './style.scss';



const AdsDashboard = () => {

    const UseGetAvatar = useGetAvatar();


    function discovery() {



    }

    return (
        <div>
            {UseGetAvatar.when ?

                <div className="box">
                    <div className="planner-ticket-top">
                        <div>{UseGetAvatar.city_local}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.978" height="24" viewBox="0 0 23.978 24">
                            <path id="Vector" d="M23.1,10.879A3,3,0,0,1,20.978,16H17.442L13.4,22.487A2.972,2.972,0,0,1,10.79,24a2.629,2.629,0,0,1-2.461-3.553L10,16H6.286a5.012,5.012,0,0,1-4.341-2.52L.331,10.655A2.525,2.525,0,0,1,.1,8.689,2.319,2.319,0,0,1,1.269,7.267,2.409,2.409,0,0,1,4.083,7.7L5.5,9.121A2.982,2.982,0,0,0,7.622,10h2.384L8.078,3.361A2.63,2.63,0,0,1,10.608,0h.182a3,3,0,0,1,2.634,1.563L17.671,10h3.307a3,3,0,0,1,2.121.879ZM12.088,10h3.345l-3.78-7.509A.989.989,0,0,0,10.79,2h-.182A.63.63,0,0,0,10,2.805Zm9.6,3.707A1,1,0,0,0,20.978,12H7.622a4.972,4.972,0,0,1-3.54-1.465L2.665,9.118A.415.415,0,0,0,2.378,9a.437.437,0,0,0-.2.051.323.323,0,0,0-.158.211.523.523,0,0,0,.047.4l1.619,2.826A3,3,0,0,0,6.286,14h5.153a1,1,0,0,1,.937,1.35L10.2,21.15a.628.628,0,0,0,.588.85,1,1,0,0,0,.878-.521l4.371-7.008A1,1,0,0,1,16.887,14h4.091a1,1,0,0,0,.707-.293Z" transform="translate(0 0)" fill="#3b3b3b" />
                        </svg>
                        <div>{UseGetAvatar.city_trip}</div>
                    </div>
                    <div className="planner-ticket-bottom">
                        <div className="planner-ticket-bottom-left">
                            <span>Passenger</span>
                            <h5>{UseGetAvatar.name}</h5>
                            <span>Date</span>
                            <h5>{new Date(UseGetAvatar.when).getDate()} /
                                {GetTimestampInfomartions(new Date(UseGetAvatar.when).getTime(), 0).nameOfMonthShort}
                                / {new Date(UseGetAvatar.when).getFullYear()}</h5>
                        </div>
                        <div className="planner-ticket-bottom-right">
                            <div>
                                <span>Value</span>
                                <h1>******</h1>
                            </div>
                            <button >Discover</button>
                        </div>
                    </div>
                </div>
                : ''}

        </div>
    )
}

export default AdsDashboard