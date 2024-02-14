import styles from "./BoardList.module.css";

const BoardList = () => {
    return (
        <div id={styles.BoardListContainer}>
            <div className={styles.Board}>
                <p className={styles.BoardSize}>Width x Length x 4/4</p>
                <p className={styles.BoardCount}>count</p>
                <p className={styles.BoardPrice}>price</p>
            </div>
        </div>
    )
}

export default BoardList;