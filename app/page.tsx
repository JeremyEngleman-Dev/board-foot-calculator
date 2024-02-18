import styles from "./page.module.css";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";
import BoardList from "./_ui/BoardList/BoardList";
import { Board } from "./_data/definitions";

let IDCount: number = 0;
const boardList: Board[] = [];

export default function Home() {


  const addBoard = (e: React.FormEvent<HTMLFormElement>, board: Board) => {
    e.preventDefault();

  }

  return (
    <main className={styles.main}>
      <div id={styles.MainWindow}>
        <Calculator />
        <BoardList />
        <Total />
      </div>
    </main>
  );
}