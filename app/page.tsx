import styles from "./page.module.css";
import Calculator from "./_ui/Calculator/Calculator"

export default function Home() {
  return (
    <main className={styles.main}>
      <Calculator />
    </main>
  );
}