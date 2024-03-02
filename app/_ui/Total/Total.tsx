import styles from "./Total.module.css";
import { FunctionComponent as FC } from "react";

interface Total{
    total: number
}

const Total: FC<Total> = ({total}) => {
    const boardPrice: string = String(total.toFixed(2));

    return (
        <div id={styles.TotalContainer}>
            <div id={styles.Total}>
                <label className={styles.Label}>Total:</label>
                <label className={styles.TotalValue}>{`$${boardPrice}`}</label>
            </div>
        </div>
    )
}

export default Total;