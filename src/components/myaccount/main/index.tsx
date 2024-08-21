import { useContext, useEffect, useState } from "react";
import { useForgetPasswordCreate } from "../../../requests/user/useForgetPasswordCreate";
import { useEditTrip } from "../../../requests/trip/useEditTrip";
import { ITrip } from "../../../types/ITrip";
import { getCurrency } from "../../../functions/cities/getCurrency";
import PhotoUpdate from "../../communs/inputs/photoUpdate";
import InputCity from "../../communs/inputs/city";
import InputDate from "../../communs/inputs/date";
import ButtonSimple from "../../communs/buttons/simple/simple";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { UseTripContext } from "../../../context/useTripContext";
import { UseUserContext } from "../../../context/useUserContext";

const MyAccountMain = () => {
    const [trip, setTrip] = useState<ITrip>({
        currentCity: "",
        currentState: "",
        currentCountry: "",
        currentCountrySlug: "",
        currentCurrency: "",

        tripCity: "",
        tripState: "",
        tripCountry: "",
        tripCountrySlug: "",
        tripCurrency: "",
        tripLon: "",
        tripLat: "",

        when: 0,
        loaded: true
    });

    const [loading, setLoading] = useState(false);

    const [loadingPassword, setLoadingPassword] = useState(false);

    const UseEditTrip = useEditTrip();
    const tripContext = useContext(UseTripContext);
    const userContext = useContext(UseUserContext);

    const UseForgetPasswordCreate = useForgetPasswordCreate();
    useEffect(() => {
        if (tripContext?.state.currentCity) {
            setTrip(tripContext.state);
        }
    }, [tripContext]);

    const handleEditTrip = () => {
        setLoading(true);
        UseEditTrip(trip).then(() => {
            setLoading(false);
        });
    };

    const handleNewPassword = () => {
        if (userContext) {
            setLoadingPassword(true);
            UseForgetPasswordCreate(userContext.state.email).then((data: any) => {
                setLoadingPassword(false);
            });
        }
    };

    return (
        <>
            <div className="box my-account-main">
                <PhotoUpdate />
                {userContext?.state.loaded && tripContext?.state.loaded ? (
                    <>
                        <h3>{userContext.state.name}</h3>
                        <span>{userContext.state.email}</span>
                        <div className="password">
                            <ButtonSimple
                                type="simple"
                                title="Change password"
                                loading={loadingPassword}
                                status={true}
                                action={() => {
                                    handleNewPassword();
                                }}
                            />
                        </div>
                        <InputCity
                            title="Where do live now?"
                            inicialValue={`${tripContext?.state.currentCity} - ${tripContext?.state.currentCountry}`}
                            result={(e) => {
                                setTrip({
                                    ...trip,
                                    currentCity: e.address.name,
                                    currentState: e.address.state,
                                    currentCountry: e.address.country,
                                    currentCountrySlug: e.address.country_code,
                                    currentCurrency: getCurrency(e.address.country)
                                });
                            }}
                        />
                        <InputCity
                            title="Where do intend to go trip?"
                            inicialValue={`${tripContext?.state.tripCity} - ${tripContext?.state.tripCountry}`}
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
                                });
                            }}
                        />
                        <InputDate
                            date={trip.when > 0 ? trip.when : tripContext?.state.when}
                            setDate={(e) => setTrip({ ...trip, when: e })}
                            title="When do you intend to go?"
                        />
                    </>
                ) : (
                    <>
                        <Skeleton style={{ width: "246px", height: "26pt" }} />
                        <Skeleton style={{ width: "180px", height: "10pt" }} />
                        <Skeleton style={{ width: "138px", height: "32pt" }} />
                        <div>
                            <Skeleton style={{ width: "166px", height: "12pt" }} />
                            <Skeleton style={{ width: "100%", height: "28pt", marginTop: "8px" }} />
                        </div>
                        <div>
                            <Skeleton style={{ width: "166px", height: "12pt" }} />
                            <Skeleton style={{ width: "100%", height: "28pt", marginTop: "8px" }} />
                        </div>
                        <div>
                            <Skeleton style={{ width: "166px", height: "12pt" }} />
                            <Skeleton style={{ width: "100%", height: "28pt", marginTop: "8px" }} />
                        </div>
                    </>
                )}
                <ButtonSimple
                    title="Save"
                    type="success"
                    loading={loading}
                    status={true}
                    action={() => {
                        handleEditTrip();
                    }}
                />
            </div>
        </>
    );
};

// <Messag message={message}setMessage={setMessage}/>
export default MyAccountMain;
