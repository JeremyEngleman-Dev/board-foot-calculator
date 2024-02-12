import styles from "./page.module.css";
import Calculator from "./_ui/Calculator/Calculator";
import Total from "./_ui/Total/Total";

export default function Home() {
  const addBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <main className={styles.main}>
      <Calculator />
      <Total />
    </main>
  );
}