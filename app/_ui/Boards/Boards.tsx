"use client"

import styles from "./Boards.module.css";
import { Board } from "../../_data/definitions";
import { FunctionComponent as FC, useState, ComponentPropsWithRef } from "react";
import clsx from "clsx";

interface aBoard {
    individualBoard: Board
    setSelectedBoard: (key: number) => void
    isSelected: boolean
}

type Props = ComponentPropsWithRef<"div">;

const Boards: FC<aBoard> = ({individualBoard, setSelectedBoard, isSelected}) => {
    const [board, setBoard] = useState<Board>(individualBoard);
    const [selected, setSelected] = useState<boolean>(false);

    let Measurement: string = ``;
    Measurement = Measurement + board.thickness;
    Measurement = Measurement + " x ";
    board.widthFT !== 0 ? Measurement += `${board.widthFT}ft ` : null;
    board.widthIN !== 0 ? Measurement += `${board.widthIN}in ` : null;
    Measurement = Measurement + "x ";
    board.lengthFT !== 0 ? Measurement += `${board.lengthFT}ft ` : null;
    board.lengthIN !== 0 ? Measurement += `${board.lengthIN}in` : null;

    const handleClick = () => {
        setSelectedBoard(board.key);
    }

    return (
        <div className={clsx({
            [styles.Board]: true,
            [styles.Selected]: isSelected,
        })} onClick={handleClick}>
            <p className={styles.BoardSize}>{Measurement}</p>
            <p className={styles.BoardCount}>${board.price} x {board.count} = </p>
            <p className={styles.BoardPrice}>${board.totalPrice}</p>
        </div>
    )
}

export default Boards;