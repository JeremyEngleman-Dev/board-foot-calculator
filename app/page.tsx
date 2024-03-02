"use client"

import styles from "./page.module.css";
import { useState, ChangeEvent } from "react";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";
import Boards from "./_ui/Boards/Boards";
import { Board, defaultValue } from "./_data/definitions";

let IDCount: number = 1;
let total: number = 0;

export default function Home() {
  const [boardList, setBoardList] = useState<Array<Board>>([]);
  const [board, setBoard] = useState<Board>(defaultValue);

  const handleFieldChange = (event: ChangeEvent<any>) => {
    if(event.target.value !== ""){
        if(event.target.value > 999){return;};
    };
    setBoard((value) => ({...value,[event.target.name]: event.target.value}));
  }

  const saveBoard = (board: Board) => {
    if(board.key === 0){
      board.key = IDCount;
      IDCount++;
      setBoardList([...boardList, board]);
    } else {
      const boardListEdit: Board[] = boardList.map(item => {
        return item.key === board.key ? board : item;
      })
      setBoardList(boardListEdit);
    }
    setBoard(defaultValue);
  }

  const deleteBoard = (board: Board) => {
    setBoardList(boardList.filter(item => item.key !== board.key));
    setBoard(defaultValue);
  }

  const cancelBoard = () => {
    setBoard(defaultValue);
  }

  const getSelectedBoard = (key: number) => {
    const selectedBoardIndex = boardList.findIndex(item => item.key == key);
    setBoard(boardList[selectedBoardIndex]);
  }

  const calculateTotalPrice = (boardList: Array<Board>) => {
    let calculateTotal: number = 0;
    boardList.forEach(board => {
      calculateTotal += board.totalPrice;
    })
    return calculateTotal;
  }

  return (
    <main className={styles.main}>
      <div id={styles.MainWindow}>
        <div id={styles.Header}>
          <h1 id={styles.HeaderText}>Board Foot Calculator</h1>
        </div>
        <Calculator 
          saveBoard={saveBoard} 
          deleteBoard={deleteBoard} 
          cancelBoard={cancelBoard} 
          handleFieldChange={handleFieldChange} 
          board={board}
        />
        <div id={styles.BoardListContainer}>
          {boardList.map((item) => {
            return (
              <Boards 
                key={item.key} 
                individualBoard={item} 
                getSelectedBoard={getSelectedBoard}
                isSelected={board.key == item.key ? true : false}
              />
            )
          })}
        </div>
        <Total total={(calculateTotalPrice(boardList))}/>
      </div>
    </main>
  );
}