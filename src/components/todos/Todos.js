import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decr, incr, add, del } from "../../redux/toolkitSlice";
import { getCount } from "../../redux/selectors/getCounterValue/getCounterValue";

import styles from "../Blocks/First/first.module.scss";

function Todos() {
    const count = useSelector(getCount);
    const todos = useSelector((state) => state.toolkit.todos);

    const dispatch = useDispatch();

    const asyncTodo = () => {
        return async (dispatch) => {
            setTimeout(() => {
                dispatch(add(prompt()));
            }, 2000);
        };
    };

    return (
        <div className={styles.under_title}>
            <h3 className={styles.under__title_counter} data-testid="val-count">
                Счетсчик {count}
            </h3>
            <div className={styles.under_buttons}>
                <button
                    data-testid="incr-butt"
                    onClick={() => {
                        dispatch(incr());
                    }}
                >
                    инкр
                </button>
                <button
                    data-testid="decr-butt"
                    onClick={() => {
                        dispatch(decr());
                    }}
                >
                    декр
                </button>
                <button
                    onClick={() => {
                        dispatch(add(prompt()));
                    }}
                >
                    добавить
                </button>
                <button
                    onClick={() => {
                        dispatch(del());
                    }}
                >
                    удалить последний
                </button>
                <button
                    onClick={() => {
                        dispatch(asyncTodo());
                    }}
                >
                    async add todo
                </button>
            </div>

            <ul>
                {todos.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
