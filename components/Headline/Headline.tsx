import styles from "./Headline.module.css";

export default function Headline({ title }: { title: string }) {
  return <h1 className={`${styles.headline} global`}>{title}</h1>;
}
