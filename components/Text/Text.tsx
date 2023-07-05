import styles from "./Text.module.css";

export default function Text({ text }: { text: string }) {
  return <p className={styles.text}>{text}</p>;
}
