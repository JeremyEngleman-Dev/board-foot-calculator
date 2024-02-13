import styles from "./page.module.css";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";
import BoardList from "./_ui/BoardList/BoardList";

export default function Home() {
  const addBoard = (e: React.FormEvent<HTMLFormElement>) => {
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