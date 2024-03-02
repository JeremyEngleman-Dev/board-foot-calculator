"use client"

import styles from "./Boards.module.css";
import { Board } from "../../_data/definitions";
import { FunctionComponent as FC } from "react";
import clsx from "clsx";

interface aBoard {
    individualBoard: Board
    getSelectedBoard: (key: number) => void
    isSelected: boolean
}

const Boards: FC<aBoard> = ({individualBoard, isSelected, getSelectedBoard}) => {
    let T = individualBoard.thickness; //Thickness
    let W = ""; //Width
    let H = ""; //Height
    const boardPrice: string = String(Number(individualBoard.totalPrice).toFixed(2));

    individualBoard.widthFT !== 0 ? W += `${individualBoard.widthFT}ft ` : null;
    individualBoard.widthIN !== 0 ? W += `${individualBoard.widthIN}in ` : null;

    individualBoard.lengthFT !== 0 ? H += `${individualBoard.lengthFT}ft ` : null;
    individualBoard.lengthIN !== 0 ? H += `${individualBoard.lengthIN}in` : null;

    const handleClick = () => {
        getSelectedBoard(individualBoard.key);
    }

    return (
        <div className={clsx({
            [styles.Board]: true,
            [styles.Selected]: isSelected,
        })} onClick={handleClick}>
            <div id={styles.BoardSize}>
                <p className={styles.BoardSizeText}>T: </p>
                <p className={styles.BoardSizeValues}>{T}</p>
                <p className={styles.BoardSizeText}>W: </p>
                <p className={styles.BoardSizeValues}>{W}</p>
                <p className={styles.BoardSizeText}>H: </p>
                <p className={styles.BoardSizeValues}>{H}</p>
            </div>
            <p className={styles.BoardCount}>${individualBoard.price} x {individualBoard.count} = </p>
            <p className={styles.BoardPrice}>${boardPrice}</p>
        </div>
    )
}

export default Boards;