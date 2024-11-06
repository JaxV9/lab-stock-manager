import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section>
        <div className="stock-item">
          <span>item 1</span>
        </div>
        <div className="stock-item">
          <span>item 2</span>
        </div>
        <div className="stock-item">
          <span>item 3</span>
        </div>
      </section>
    </>
  );
}
