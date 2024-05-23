import { useEffect, useState } from "react";
import PhotoUpdate from "../../communs/inputs/photoUpdate";
import { useGetUser } from "../../../store/hooks/user/useGetUser";
import useEditUserDetails from "../../../hooks/user/useEditUserDetails";
import { useSetUser } from "../../../store/hooks/user/useSetUser";
import InputCity from "../../communs/inputs/city";
import InputDate from "../../communs/inputs/date";
import ButtonSimple from "../../communs/buttons/simple/simple";
import "./style.scss";
import { useForgetPasswordCreate } from "../../../hooks/user/useForgetPasswordCreate";
import Skeleton from "react-loading-skeleton";
import Message from "../../messages";
import { IMessage } from "../../../types/messages/IMenssage";
import { useGetTrip } from "../../../store/hooks/trip/useGetTrip";
import { useEditTrip } from "../../../hooks/trip/useEditTrip";
import { ITrip } from "../../../types/trip";
import { getCurrency } from "../../../functions/cities/getCurrency";
import { useSetTrip } from "../../../store/hooks/trip/useSetTrip";

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

        when: 0
    });

    const [loading, setLoading] = useState(false);

    const [loadingPassword, setLoadingPassword] = useState(false);
    const [message, setMessage] = useState<IMessage>({ status: false });

    const UseGetUser = useGetUser();
    const UseEditTrip = useEditTrip();
    const UseGetTrip = useGetTrip();
    const UseSetTrip = useSetTrip();

    const UseForgetPasswordCreate = useForgetPasswordCreate();
    useEffect(() => {
        if (UseGetTrip.currentCity) {
            setTrip(UseGetTrip);
        }
    }, [UseGetTrip]);

    const handleEditTrip = () => {
        setLoading(true);
        UseEditTrip(trip).then(() => {
            UseSetTrip(trip);
            setLoading(false);
        });
    };

    const handleNewPassword = () => {
        setLoadingPassword(true);
        UseForgetPasswordCreate(UseGetUser.email)
            .then((data: any) => {
                setLoadingPassword(false);
                if (data.status === 200) {
                    setMessage({
                        title: "New email required!",
                        description: "We emailed instructions for creating a new password.",
                        type: "success",
                        status: true
                    });
                } else {
                    setMessage({
                        title: "An error occurred!",
                        description: "Unable to request a new password. Please try again later.",
                        type: "error",
                        status: true
                    });
                }
            })
            .catch((error) => {
                setLoadingPassword(false);
                setMessage({
                    title: "An error occurred!",
                    description: "Unable to request a new password. Please try again later.",
                    type: "error",
                    status: true
                });
                console.log(error);
            });
    };

    return (
        <>
            <div className="box my-account-main">
                <PhotoUpdate />
                {UseGetUser.name ? (
                    <>
                        <h3>{UseGetUser.name}</h3>
                        <span>{UseGetUser.email}</span>
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
                            inicialValue={`${UseGetTrip.currentCity} - ${UseGetTrip.currentCountry}`}
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
                            inicialValue={`${UseGetTrip.tripCity} - ${UseGetTrip.tripCountry}`}
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
                            date={trip.when > 0 ? trip.when : UseGetTrip.when}
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
            <Message
                message={message}
                setMessage={setMessage}
            />
        </>
    );
};

export default MyAccountMain;
