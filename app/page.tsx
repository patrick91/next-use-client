import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { AClientComponent } from "./a-client-component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <AClientComponent />
    </main>
  );
}
