"use client"

import styles from "./page.module.css";
import { useState } from "react";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";
import Boards from "./_ui/Boards/Boards";
import { Board } from "./_data/definitions";

let IDCount: number = 1;
let total: number = 0;

export default function Home() {
  const [boardList, setBoardList] = useState<Array<Board>>([]);

  function saveBoard(board: Board){
    if(board.key === 0){
      board.key = IDCount;
      IDCount++;
    };
    setBoardList([...boardList, board]);
  }

  let calculateTotal = 0;
  boardList.forEach(board => {
    calculateTotal += board.totalPrice;
  })
  total = calculateTotal;
  
  return (
    <main className={styles.main}>
      <div id={styles.MainWindow}>
        <Calculator saveBoard={saveBoard}/>
        <div id={styles.BoardListContainer}>
          {boardList.map((board: Board) => {
            return (
              <Boards key={board.key} board={board}/>
            )
          })}
        </div>
        <Total total={JSON.stringify(total)}/>
      </div>
    </main>
  );
}