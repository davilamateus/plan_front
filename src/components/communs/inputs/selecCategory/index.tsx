import { Dispatch, SetStateAction } from "react";
import './style.scss';
import { IFinancesGoalsList } from "../../../../types/finances/IGoals";


interface type {
    title: string;
    goals: IFinancesGoalsList[];
    selectOption: number | undefined;
    setSelectOptions: Dispatch<SetStateAction<number | undefined>>;
}

const InputSelectCategory = ({ title, goals, setSelectOptions, selectOption }: type) => {
    console.log(goals);
    return (
        <label className="select-input">
            <h4>{title}</h4>
            <div>
                <select onChange={(e) => { setSelectOptions(+(e.target.value)) }}>
                    {goals.length > 0 ? goals.map((item) => (
                        item.id == selectOption ?
                            <option selected={true} value={item.id == 0 ? undefined : item.id}>
                                {item.title}
                            </option>
                            :

                            <option value={item.id == 0 ? undefined : item.id}>
                                {item.title}
                            </option>
                    )) :
                        <option value={undefined}>
                            Others
                        </option>
                    }
                </select>

            </div>
        </label>
    )

}

export default InputSelectCategory;