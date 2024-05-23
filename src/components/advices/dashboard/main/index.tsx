import { useEffect, useState } from "react";
import { IAdvicesMain } from "../../../../types/advices/IAdvices";
import { useGetTrip } from "../../../../store/hooks/trip/useGetTrip";
import { useGetAdvices } from "../../../../hooks/city/useGetAdvices";
import AdviceCategorieCard from "../card";
import BoxFullpage from "../../../communs/boxFullpage";
import AdviceOpened from "../../opened";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import TitleOfComponentOnDashnboard from "../../../communs/titleOfComponentOnDashnboard";

const AdvicesDashboard = () => {
    const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
    const [opened, setOpened] = useState(false);
    const [selectAdvice, setSelectAdvice] = useState<IAdvicesMain>();

    const UseGetTrip = useGetTrip();
    const UseGetAdvices = useGetAdvices();

    useEffect(() => {
        if (UseGetTrip.tripLat) {
            UseGetAdvices(UseGetTrip.tripLat, UseGetTrip.tripLon).then((data) => setAdvices(data.data));
        }
    }, [UseGetTrip]);

    return (
        <div>
            <TitleOfComponentOnDashnboard
                link="/advices"
                title={`Advices`}
            />
            <div>
                {advices.length > 0 ? (
                    <div className="advice-categorie-cards-dashboard ">
                        <div className="advice-categorie-scroll-dashboard">
                            {advices.map((advice, index) => (
                                <AdviceCategorieCard
                                    key={index}
                                    advice={advice}
                                    selectAdvice={setSelectAdvice}
                                    setOpened={setOpened}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="advice-categorie-cards-dashboard">
                        <div className="advice-categorie-scroll-dashboard">
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                            <Skeleton style={{ width: "200px", height: "300px" }} />
                        </div>
                    </div>
                )}
                {selectAdvice && opened && (
                    <BoxFullpage
                        setOpened={setOpened}
                        content={<AdviceOpened advice={selectAdvice} />}
                    />
                )}
            </div>
        </div>
    );
};

export default AdvicesDashboard;
