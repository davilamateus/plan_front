import { useContext, useEffect, useState } from "react";
import { getCurrency } from "../../functions/cities/getCurrency";
import { useEditTrip } from "../../requests/trip/useEditTrip";
import { useForgetPasswordCreate } from "../../requests/user/useForgetPasswordCreate";
import { ITrip } from "../../types/ITrip";
import { UseUserContext } from "../../context/useUserContext";
import { UseTripContext } from "../../context/useTripContext";
import Skeleton from "react-loading-skeleton";
import ButtonSimple from "../../components/communs/buttons/simple/simple";
import InputCity from "../../components/communs/inputs/city";
import InputDate from "../../components/communs/inputs/date";
import PhotoUpdate from "../../components/communs/inputs/photoUpdate";
import { UseTitleContext } from "../../context/useTitleContext";

const PageMyAccoount = () => {
    const [formTrip, setFormTrip] = useState<ITrip>({
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

    const user = useContext(UseUserContext);
    const UseEditTrip = useEditTrip();
    const trip = useContext(UseTripContext);

    useEffect(() => {
        if (trip?.state) {
            setFormTrip(trip.state);
        }
    }, [trip]);

    const UseForgetPasswordCreate = useForgetPasswordCreate();
    const title = useContext(UseTitleContext);
    title.setTitle("My Account");
    const handleEditTrip = () => {
        setLoading(true);
        UseEditTrip(formTrip).then(() => {
            trip?.editTrip(formTrip);
            setLoading(false);
        });
    };

    const handleNewPassword = () => {
        if (user) {
            setLoadingPassword(true);
            UseForgetPasswordCreate(user?.state.email).then((data: any) => {
                setLoadingPassword(false);
            });
        }
    };

    return (
        <>
            <div className="box my-account-main">
                <PhotoUpdate />
                {user?.state.name ? (
                    <>
                        <h3>{user?.state.name}</h3>
                        <span>{user?.state.email}</span>
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
                            inicialValue={`${trip?.state.currentCity} - ${trip?.state.currentCountry}`}
                            result={(e) => {
                                setFormTrip({
                                    ...formTrip,
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
                            inicialValue={`${trip?.state.tripCity} - ${trip?.state.tripCountry}`}
                            result={(e) => {
                                setFormTrip({
                                    ...formTrip,
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
                        {trip && (
                            <InputDate
                                date={trip?.state.when > 0 ? trip?.state.when : trip?.state.when}
                                setDate={(e) => setFormTrip({ ...formTrip, when: e })}
                                title="When do you intend to go?"
                            />
                        )}
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

export default PageMyAccoount;
