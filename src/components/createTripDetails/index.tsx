import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateTripDetails } from "../../hooks/trip/useCreateTripDetails";
import { getCurrency } from "../../functions/cities/getCurrency";
import { ITrip } from "../../types/trip";
import PhotoUpdate from "../communs/inputs/photoUpdate"
import InputCity from "../communs/inputs/city";
import InputDate from "../communs/inputs/date";
import ButtonSimple from "../communs/buttons/simple/simple";
import LogoBottom from "../communs/logoBottom";
import './style.scss';


const CreateTripDetailsComponent = () => {

    const [trip, setTrip] = useState<ITrip>({
        currentCity: '',
        currentState: '',
        currentCountry: '',
        currentCountrySlug: '',
        currentCurrency: '',


        tripCity: '',
        tripState: '',
        tripCountry: '',
        tripCountrySlug: '',
        tripCurrency: '',
        tripLon: '',
        tripLat: '',

        when: new Date().getTime() + 31536000000
    });
    const [btnLoading, setBtnLoading] = useState(false);

    const UseCreateTripDetails = useCreateTripDetails();
    const UserNavigate = useNavigate();



    const handleSubmin = () => {
        setBtnLoading(true);
        UseCreateTripDetails(trip)
            .then((data: any) => {
                if (data.status == 200) {
                    UserNavigate('/');
                } else {
                    UserNavigate('/login');
                }
            });
    };


    return (
        <div className="create-user-details">
            <div className="create-user-details-main">
                <img className="person" src="./../../../img/person2.png" alt="" />
                <div className="box create-user-details-content">
                    <h3>User Details</h3>
                    <p>Now we need some informations about you and
                        yours plans of trip.</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <PhotoUpdate />
                        <InputCity
                            title='Where do live now?'
                            result={(e) => {
                                setTrip({
                                    ...trip,
                                    currentCity: e.address.name,
                                    currentState: e.address.state,
                                    currentCountry: e.address.country,
                                    currentCountrySlug: e.address.country_code,
                                    currentCurrency: getCurrency(e.address.country)
                                })
                            }}

                        />
                        <InputCity
                            title='Where do intend to go trip?'
                            result={(e) => {
                                setTrip({
                                    ...trip,
                                    tripCity: e.address.name,
                                    tripState: e.address.state,
                                    tripCountry: e.address.country,
                                    tripCountrySlug: e.address.country_code,
                                    tripCurrency: getCurrency(e.address.country),
                                    tripLat: e.lat,
                                    tripLon: e.lon
                                })
                            }}

                        />
                        <InputDate
                            date={trip.when}
                            setDate={(e) => setTrip({ ...trip, when: e })}
                            title="When do you intend to go?"
                        />
                        <ButtonSimple
                            title="Save"
                            status={trip.currentCity !== '' && trip.tripCity !== '' && trip.when > 0}
                            loading={btnLoading}
                            action={handleSubmin}
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

export default CreateTripDetailsComponent;