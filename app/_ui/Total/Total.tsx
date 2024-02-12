import styles from "./Total.module.css";

const Total = () => {
    return (
        <div id={styles.TotalContainer}>
            <div id={styles.Total}>
                <label className={styles.Label}>Total: </label>
                <label className={styles.Label}>totals</label>
            </div>
        </div>
    )
}

export default Total;