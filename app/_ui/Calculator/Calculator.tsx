"use client"

import styles from "./Calculator.module.css";
import { useState } from "react";

const Calculator = () => {
    const [boards, setBoards] = useState([]);

    return (
        <form id={styles.Calculator}>
            <div id={styles.ControlContainer}>
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
                    <input className={styles.TextBox} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox} type="text" maxLength={5} />
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox} type="text" maxLength={5} />
                </div>
                <button id={styles.AddButton}>Add</button>    
            </div>
        </form>
    )
}

export default Calculator;