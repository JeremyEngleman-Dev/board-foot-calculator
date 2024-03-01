"use client"

import styles from "./page.module.css";
import { useState } from "react";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";
import Boards from "./_ui/Boards/Boards";
import { Board, SelectedBoard, defaultValue } from "./_data/definitions";

let IDCount: number = 1;
let total: number = 0;

export default function Home() {
  const [boardList, setBoardList] = useState<Array<Board>>([]);
  const [selectedBoard, setSelectedBoard] = useState<SelectedBoard>();

  const saveBoard = (board: Board) => {
    if(board.key === 0){
      board.key = IDCount;
      IDCount++;
    };
    setBoardList([...boardList, board]);
  }

  const getSelectedBoard = (selected: SelectedBoard) => {
    if(selected == undefined){
      return defaultValue;
    } else {
      const selectedBoardIndex = boardList.findIndex(item => item.key == selected);
      return boardList[selectedBoardIndex];
    }
  }

  const calculateTotalPrice = (boardList: Array<Board>) => {
    let calculateTotal = 0;
    boardList.forEach(board => {
      calculateTotal += board.totalPrice;
    })
    return parseFloat(calculateTotal.toFixed(2));
  }

  
  return (
    <main className={styles.main}>
      <div id={styles.MainWindow}>
        <Calculator saveBoard={saveBoard} setBoardValues={getSelectedBoard(selectedBoard)}/>
        <div id={styles.BoardListContainer}>
          {boardList.map((board: Board) => {
            return (
              <Boards 
                key={board.key} 
                individualBoard={board} 
                setSelectedBoard={setSelectedBoard}
                isSelected={selectedBoard == board.key ? true : false}
              />
            )
          })}
        </div>
        <Total total={JSON.stringify(calculateTotalPrice(boardList))}/>
      </div>
    </main>
  );
}