import { useEffect, useState } from "react";
import PhotoUpdate from "../communs/inputs/photoUpdate"
import InputCity from "../communs/inputs/city";
import InputDate from "../communs/inputs/date";
import './style.scss';
import ButtonSimple from "../communs/buttons/simple/simple";
import useCreateUserDetails from "../../hooks/user/useCreateUserDetails";
import { useNavigate } from "react-router";
import LogoBottom from "../communs/logoBottom";
import { currency } from './currency';
const CreateUserDetailsComponent = () => {

    const [photo, setPhoto] = useState<string | undefined>(undefined);
    const [cityNow, setCityNow] = useState<string>('');
    const [stateNow, setStateNow] = useState<string>('');
    const [countryNow, setCountryNow] = useState<string>('');
    const [cityTrip, setCityTrip] = useState<string>('');
    const [stateTrip, setStateTrip] = useState<string>('');
    const [countryTrip, setCountryTrip] = useState<string>('');
    const [countryCode, setCountryCode] = useState<string>('');
    const [when, setWhen] = useState<number>(new Date().getTime());
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const UseCreateUserDetails = useCreateUserDetails();
    const nav = useNavigate();

    useEffect(() => {
        if (cityNow !== '' && cityTrip !== '' && when) {
            setBtnStatus(true);
        }
    }, [cityNow, cityTrip, when]);

    function createDetails() {
        setBtnLoading(true);
        UseCreateUserDetails(photo, when, cityNow, stateNow, countryNow, getCurrency(countryNow), cityTrip, stateTrip, countryTrip, getCurrency(countryTrip), countryCode)
            .then((data: any) => {
                if (data.status == 200) {
                    nav('/');
                } else {
                    nav('/login');
                }
            });
    };



    const currencyCities: any = currency

    function getCurrency(countrySearch: string) {
        const findCountry = currencyCities.find((country: any) => country.name == countrySearch);
        console.log(findCountry.currency)
        return findCountry.currency
    }

    return (
        <div className="create-user-details">
            <div className="create-user-details-main">
                <img className="person" src="./../../../img/person2.png" alt="" />
                <div className="box create-user-details-content">
                    <h2>User Details</h2>
                    <p>Now we need some informations about you and
                        yours plans of trip.</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <PhotoUpdate
                            photo={photo}
                            setPhoto={setPhoto} />
                        <InputCity
                            title='Where do live now?'
                            setCity={setCityNow}
                            setCountry={setCountryNow}
                            setState={setStateNow}

                        />
                        <InputCity
                            title='Where do intend to go trip?'
                            setCity={setCityTrip}
                            setCountry={setCountryTrip}
                            setState={setStateTrip}
                            setCountryCode={setCountryCode}
                        />
                        <InputDate
                            date={when}
                            setDate={setWhen}
                            title="When do you intend to go?"
                        />
                        <ButtonSimple
                            title="Save"
                            status={btnStatus}
                            loading={btnLoading}
                            action={() => { createDetails() }}
                            type='success'
                        />

                    </form>
                </div>
            </div>
            <footer>
                <LogoBottom />
            </footer>
        </div>
    )
}

export default CreateUserDetailsComponent;