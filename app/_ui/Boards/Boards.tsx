"use client"

import styles from "./Boards.module.css";
import { Board } from "../../_data/definitions";
import { FunctionComponent as FC } from "react";

interface aBoard {
    board: Board
}

const Boards: FC<aBoard> = ({board}) => {
    let Measurement: string = ``;
    Measurement = Measurement + board.thickness;
    Measurement = Measurement + " x ";
    board.widthFT !== 0 ? Measurement += `${board.widthFT}ft ` : null;
    board.widthIN !== 0 ? Measurement += `${board.widthIN}in ` : null;
    Measurement = Measurement + "x ";
    board.lengthFT !== 0 ? Measurement += `${board.lengthFT}ft ` : null;
    board.lengthIN !== 0 ? Measurement += `${board.lengthIN}in` : null;

    return (
        <div className={styles.Board}>
            <p className={styles.BoardSize}>{Measurement}</p>
            <p className={styles.BoardCount}>${board.price} x {board.count} = </p>
            <p className={styles.BoardPrice}>${board.totalPrice}</p>
        </div>
    )
}

export default Boards;