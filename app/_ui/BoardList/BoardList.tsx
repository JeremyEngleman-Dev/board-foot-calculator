import styles from "./BoardList.module.css";

const BoardList = () => {
    return (
        <div id={styles.BoardListContainer}>
            <div className={styles.Board}>
                <p>List</p>
            </div>
            <div className={styles.Board}>
                <p>List</p>
            </div>
            <div className={styles.Board}>
                <p>List</p>
            </div>
            <div className={styles.Board}>
                <p>List</p>
            </div>
        </div>
    )
}

export default BoardList;