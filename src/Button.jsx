import styles from "./Button.module.css";

export default function Button({ op, handleclick }) {
  return <button onClick={handleclick} className={styles.btn}>{op}</button>;
}
