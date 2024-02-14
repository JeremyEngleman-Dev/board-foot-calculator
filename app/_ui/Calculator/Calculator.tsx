"use client"

import styles from "./Calculator.module.css";
import { ChangeEvent, useState } from "react";

const Calculator = () => {
    const [thickness, setThickness] = useState<Array<string>>(["4/4","5/4","6/4","8/4","10/4","12/4"]);
    const [widthFT, setWidthFT] = useState([]);
    const [widthIN, setWidthIN] = useState([]);
    const [lengthFT, setLengthFT] = useState([]);
    const [lengthIN, setLengthIN] = useState([]);
    const [price, setPrice] = useState([]);
    const [count, setCount] = useState([]);

    const handleThicknessChange = (event: ChangeEvent<HTMLInputElement>) => {setThickness(event.target.value)};

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form id={styles.Calculator} onSubmit={handleSubmit}>
            <div id={styles.ControlContainer}>
                <div className={styles.Control}>
                    <label className={styles.Label}>Thickness</label>
                    <select className={styles.Dropdown}>
                        {thickness.map((e) => <option value={e}>{e}</option>)}
                    </select>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Width</label>
                    <input className={styles.TextBox} value={widthFT} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} value={widthIN} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox} value={lengthFT} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} value={lengthIN} type="text" maxLength={5} />
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox} value={count} type="text" maxLength={5} />
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox} value={price} type="text" maxLength={5} />
                </div>
                <button id={styles.AddButton}>Add</button>    
            </div>
        </form>
    )
}

export default Calculator;