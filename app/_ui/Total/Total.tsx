import styles from "./Total.module.css";

const Total = () => {
    return (
        <div id={styles.TotalContainer}>
            <div id={styles.Total}>
                <label className={styles.Label1}>Total:</label>
                <label className={styles.Label2}>totals</label>
            </div>
        </div>
    )
}

export default Total;