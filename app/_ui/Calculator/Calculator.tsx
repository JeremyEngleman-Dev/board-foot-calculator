"use client"

import styles from "./Calculator.module.css";
import { ChangeEvent, FormEvent, FunctionComponent as FC, useState } from "react";
import { Board, ThicknessOption, ThicknessOptions } from "../../_data/definitions";
//import processData from "../../_data/processing";

const defaultValue: Board = {key: 0, thickness: "4/4", widthFT: 0, widthIN: 0, lengthFT: 0, lengthIN: 0, price: 0, count: 1, totalPrice: 0}

interface Params {
    saveBoard: (board: Board) => void;
};

const Calculator: FC<Params> = ({saveBoard}) => {
    const [board, setBoard] = useState<Board>(defaultValue);

    const handleChange = (event: ChangeEvent<any>) => {
        if(event.target.value !== ""){
            if(event.target.value > 999){return;};
        };
        setBoard((value) => ({...value,[event.target.name]: event.target.value}));
    }

    const getThicknessValue = (option: string) => {
        ThicknessOptions.forEach(item => {
            if(item.label == option){
                //console.log(item.value);
                return (item.value)}
        })
    }

    const calculatePrice = (board: Board) => {
        const thickness: number = 1;
        const Length: number = Math.round((Number(board.lengthFT*12) + Number(board.lengthIN))/12*1000)/1000;
        const Width: number = Number(board.widthFT*12) + Number(board.widthIN);
        //console.log(`Thickness: ${thickness}`);
        const rawTotal = (((Length * Width * thickness)/12)*board.price)*board.count;
        board.totalPrice = parseFloat(rawTotal.toFixed(2));
        return (board);
    }
    calculatePrice(board);
    
    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Ignore empty fields
        if(board.widthFT == 0 && board.widthIN == 0){return;};
        if(board.lengthFT == 0 && board.lengthIN == 0){return;};
        if(board.price == 0){return;};

        saveBoard(board);
        setBoard(defaultValue);
    }

    return (
        <form id={styles.Calculator} onSubmit={formSubmit}>
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
                    <input className={styles.TextBox} name="widthFT" value={board.widthFT > 0 ? board.widthFT : ""} type="number" min="0" max="999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="widthIN" value={board.widthIN > 0 ? board.widthIN : ""} type="number" min="0" max="11" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox} name="lengthFT" value={board.lengthFT > 0 ? board.lengthFT : ""} type="number" min="0" max="999" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="lengthIN" value={board.lengthIN > 0 ? board.lengthIN : ""} type="number" min="0" max="11" onChange={handleChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox} id={styles.TextBoxPrice} name="price" value={board.price > 0 ? board.price : ""} type="number" min="0" max="999" step="0.01" maxLength={5} onChange={handleChange} placeholder="0"/>
                    <label className={styles.Label}>{`$${board.totalPrice}`}</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox} name="count" value={board.count > 0 ? board.count : ""} type="number" min="1" max="999" onChange={handleChange} placeholder="0"/>
                </div>
                <button id={styles.AddButton}>Add</button>    
            </div>
        </form>
    )
}

export default Calculator;