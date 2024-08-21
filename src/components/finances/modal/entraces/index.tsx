import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IFinancesEntrace } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import "./../style.scss";

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    entraceEdit?: IFinancesEntrace;
}
const ModalEntrances = ({ setOpened, entraceEdit }: type) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [entrace, setEntrace] = useState<IFinancesEntrace>(
        entraceEdit || {
            id: 0,
            title: "",
            color: "",
            value: 0,
            date: new Date().getTime()
        }
    );
    const finances = useContext(UseFinanceContext);

    const handleEntrace = () => {
        setBtnLoading(true);

        if (entraceEdit) {
            setBtnLoading(true);
            finances?.editEntrace(entrace);
            setTimeout(() => {
                setOpened(false);
            }, 2000);
        } else {
            setBtnLoading(true);
            finances?.addEntrace(entrace);
            setTimeout(() => {
                setOpened(false);
            }, 2000);
        }
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        finances?.deleteEntrace(entrace);
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    return (
        <div className="modal-box-opened">
            <InputSimple
                title="Title:"
                setInput={(e) => {
                    setEntrace({ ...entrace, title: e });
                }}
                input={entrace.title}
                placeholder="Type a title..."
            />
            <InputDate
                title="Date:"
                date={entrace.date}
                setDate={(e) => {
                    setEntrace({ ...entrace, date: e });
                }}
            />
            <InputMoney
                title="Value:"
                setInput={(e) => {
                    setEntrace({ ...entrace, value: e });
                }}
                input={entrace.value}
            />
            <ButtonSimple
                title={entraceEdit ? "Edit" : "Add"}
                type="success"
                status={entrace.title !== "" && entrace.value !== 0}
                loading={btnLoading}
                action={() => {
                    handleEntrace();
                }}
            />
            {entraceEdit && (
                <ButtonSimple
                    title="Delete"
                    type="delete"
                    status={true}
                    loading={btnLoadingDelete}
                    action={() => {
                        handleDelete();
                    }}
                />
            )}
        </div>
    );
};

export default ModalEntrances;
