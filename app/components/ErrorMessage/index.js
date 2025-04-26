import styles from './ErrorMessage.module.css';
import { IoWarningOutline } from "react-icons/io5";

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <IoWarningOutline className={styles.icon} />
      <span>{message}</span>
    </div>
  );
}