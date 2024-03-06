"use client"

import styles from "./Calculator.module.css";
import { ChangeEvent, FunctionComponent as FC, MouseEvent, useState } from "react";
import { Board, ThicknessOptions, defaultBlankFieldValues } from "../../_data/definitions";
import clsx from "clsx";

interface Params {
    saveBoard: (board: Board) => void;
    deleteBoard: (board: Board) => void;
    cancelBoard: () => void;
    handleFieldChange: (event: ChangeEvent<any>) => void;
    board: Board;
};

const Calculator: FC<Params> = ({saveBoard, deleteBoard, cancelBoard, handleFieldChange, board}) => {
    const [isFieldBlank, setIsFieldBlank] = useState({
        width: false,
        length: false,
        price: false,
    });

    const calculatePrice = (board: Board) => {
        const thickness: any = ThicknessOptions.find(option => option.label == board.thickness);
        const Length: number = Math.round((Number(board.lengthFT*12) + Number(board.lengthIN))/12*1000)/1000;
        const Width: number = Number(board.widthFT*12) + Number(board.widthIN);
        const rawTotal = (((Length * Width * thickness.value)/12)*board.price)*board.count;
        board.totalPrice = parseFloat(rawTotal.toFixed(2));
        return (board);
    }
    calculatePrice(board);

    const handleAdd = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(board.widthFT == 0 && board.widthIN == 0){
            setIsFieldBlank(toggle => ({...toggle,width: true})); return;
        };
        if(board.lengthFT == 0 && board.lengthIN == 0){
            setIsFieldBlank(toggle => ({...toggle,length: true})); return;
        };
        if(board.price == 0){
            setIsFieldBlank(toggle => ({...toggle,price: true})); return;
        };
        saveBoard(board);
        setIsFieldBlank(defaultBlankFieldValues);
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        deleteBoard(board);
    }

    const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        cancelBoard();
    }

    return (
        <form id={styles.Calculator}>
            <div id={styles.ControlContainer}>
                <div className={styles.Control}>
                    <label className={styles.Label}>Thickness</label>
                    <select className={styles.Dropdown} name="thickness" value={board.thickness} onChange={handleFieldChange}>
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
                    <input className={styles.TextBox} name="widthFT" value={board.widthFT > 0 ? board.widthFT : ""} type="number" min="0" max="999" onChange={handleFieldChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="widthIN" value={board.widthIN > 0 ? board.widthIN : ""} type="number" min="0" max="11" onChange={handleFieldChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Length</label>
                    <input className={styles.TextBox} name="lengthFT" value={board.lengthFT > 0 ? board.lengthFT : ""} type="number" min="0" max="999" onChange={handleFieldChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>ft</label>
                    <input className={styles.TextBox} name="lengthIN" value={board.lengthIN > 0 ? board.lengthIN : ""} type="number" min="0" max="11" onChange={handleFieldChange} placeholder="0"/>
                    <label className={styles.LabelAlt}>in</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Price</label>
                    <input className={styles.TextBox} id={styles.TextBoxPrice} name="price" value={board.price > 0 ? board.price : ""} type="number" min="0" max="999" step="0.01" maxLength={5} onChange={handleFieldChange} placeholder="0"/>
                    <label className={styles.Label}>{`$${String(board.totalPrice.toFixed(2))}`}</label>
                </div>
                <div className={styles.Control}>
                    <label className={styles.Label}>Count</label>
                    <input className={styles.TextBox} name="count" value={board.count > 0 ? board.count : ""} type="number" min="1" max="999" onChange={handleFieldChange} placeholder="0"/>
                </div>
                <div className={styles.ButtonContainer}>
                    <button className={styles.Button} hidden={board.key == 0 ? false : true} name="Add" onClick={handleAdd}>Add</button>
                    <button className={styles.Button} hidden={board.key == 0 ? true : false} name="Save" onClick={handleAdd}>Save</button>
                    <button className={styles.Button} hidden={board.key == 0 ? true : false} name="Cancel" onClick={handleCancel}>Cancel</button>
                    <button className={[styles.Button,styles.DeleteButton].join(" ")} hidden={board.key == 0 ? true : false} name="Delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </form>
    )
}

export default Calculator;