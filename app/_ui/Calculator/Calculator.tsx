import styles from "./Calculator.module.css";

export const Calculator = () => {
    return (
        <div id={styles.Calculator}>
            <div id={styles.LeftControls}>
                <div className={styles.Control}>
                    <label className={styles.Label}>Thickness</label>
                    <select className={styles.Dropdown}>
                        <option value="1">4/4</option>
                        <option value="1.25">5/4</option>
                        <option value="1.5">6/4</option>
                        <option value="2">8/4</option>
                        <option value="2.5">10/4</option>
                        <option value="3">12/4</option>
                    </select>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Width</label>
                    <input className={styles.TextBox}/>
                    <select className={styles.Dropdown}>
                        <option value="in">in</option>
                        <option value="ft">ft</option>
                    </select>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox}/>
                    <select className={styles.Dropdown}>
                        <option value="in">in</option>
                        <option value="ft">ft</option>
                    </select>
                </div>
            </div>
            <div id={styles.RightControls}>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox}/>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;