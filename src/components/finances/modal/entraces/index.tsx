import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import useAddEntraces from "../../../../hooks/finances/entraces/useAddEntraces";
import { IFinancesEntrace } from "../../../../types/finances/IEntraces";
import useEditEntraces from "../../../../hooks/finances/entraces/useEditEntraces";
import useDeleteEntraces from "../../../../hooks/finances/entraces/useDeleteEntraces";
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
            title: "",
            value: 0,
            date: new Date().getTime()
        }
    );
    const UseAddEntraces = useAddEntraces();
    const UseEditEntrace = useEditEntraces();
    const UseDeleteEntrace = useDeleteEntraces();

    const handleEntrace = () => {
        setBtnLoading(true);

        if (entraceEdit) {
            UseEditEntrace({ ...entrace, id: entraceEdit.id }).then(() => {
                setBtnLoading(false);
                setOpened(false);
            });
        } else {
            UseAddEntraces(entrace).then(() => {
                setBtnLoading(false);
                setOpened(false);
            });
        }
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        if (entraceEdit?.id) UseDeleteEntrace(entraceEdit.id).then(() => setOpened(false));
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
