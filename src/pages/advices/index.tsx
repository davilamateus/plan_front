import { useContext } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import AdvicesCategorie from "../../components/advices/categories/main";
import AdvicesPrincipal from "../../components/advices/princial";
import "./style.scss";

const PageAdvices = () => {
    const title = useContext(UseTitleContext);
    title.setTitle("Advices");

    return (
        <div className="advices-main">
            <AdvicesPrincipal />
            <AdvicesCategorie
                slug="Bar"
                categorie={"13003"}
            />
            <AdvicesCategorie
                slug="Landmarks and Outdoors"
                categorie={"16000"}
            />
            <AdvicesCategorie
                slug="Restaurant"
                categorie={"13065"}
            />
            <AdvicesCategorie
                slug="Sports and Recreation"
                categorie={"18000"}
            />
        </div>
    );
};

export default PageAdvices;
