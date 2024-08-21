import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { useContext } from "react";
import { UseTitleContext } from "../../../context/useTitleContext";
import AvatarComponent from "../avatar";
import "./style.scss";
import "react-loading-skeleton/dist/skeleton.css";

const HeaderMain = () => {
    const title = useContext(UseTitleContext);

    return (
        <SkeletonTheme
            baseColor="var(--background)"
            highlightColor="var(--higher)">
            <div className="page-container">
                <div className="header">
                    <h3>{title.state}</h3>
                    <AvatarComponent />
                </div>
                <Outlet />
            </div>
        </SkeletonTheme>
    );
};

export default HeaderMain;
