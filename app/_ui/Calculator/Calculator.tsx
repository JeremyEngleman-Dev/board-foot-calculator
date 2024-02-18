"use client"

import styles from "./Calculator.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { ThicknessOption, Board } from "../../_data/definitions";

const defaultValue: Board = {thickness: "4/4", widthFT: "", widthIN: "", lengthFT: "", lengthIN: "", price: "", count: 1}

const Calculator = () => {
    const [board, setBoard] = useState<Board>(defaultValue);
    let optionCount = 1;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBoard(defaultValue);
    }

    const handleChange = (event: ChangeEvent<any>) => {
        if(event.target.value !== ""){
            if(event.target.value > 999){return;};
        };
        setBoard((value) => ({...value,[event.target.name]: event.target.value}));
    }

    return (
        <form id={styles.Calculator} onSubmit={handleSubmit}>
            <div id={styles.ControlContainer}>
                <div className={styles.Control}>
                    <label className={styles.Label}>Thickness</label>
                    <select className={styles.Dropdown} name="thickness" value={board.thickness} onChange={handleChange}>
                        <option>4/4</option>
                        <option>5/4</option>
                        <option>6/4</option>
                        <option>8/4</option>
                        <option>10/4</option>
                        <option>12/4</option>
                    </select>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Width</label>
                    <input className={styles.TextBox} name="widthFT" value={board.widthFT} type="number" min="0" max="9999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="widthIN" value={board.widthIN} type="number" min="0" max="9999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox} name="lengthFT" value={board.lengthFT} type="number" min="0" max="9999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="lengthIN" value={board.lengthIN} type="number" min="0" max="9999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox} id={styles.TextBoxPrice} name="price" value={board.price} type="number" min="0" max="9999" step="0.01" maxLength={5} onChange={handleChange} placeholder="0"/>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox} name="count" value={board.count} type="number" min="1" max="9999" onChange={handleChange} placeholder="0"/>
                </div>
                <button id={styles.AddButton}>Add</button>    
            </div>
        </form>
    )
}

export default Calculator;