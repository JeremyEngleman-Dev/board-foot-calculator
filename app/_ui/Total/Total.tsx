import styles from "./Total.module.css";
import { FunctionComponent as FC } from "react";

interface TheTotal{
    total: string
}

const Total: FC<TheTotal> = ({total}) => {
    return (
        <div id={styles.TotalContainer}>
            <div id={styles.Total}>
                <label className={styles.Label1}>Total:</label>
                <label className={styles.Label2}>{`$${total}`}</label>
            </div>
        </div>
    )
}

export default Total;