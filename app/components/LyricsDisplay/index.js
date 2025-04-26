import styles from './LyricsDisplay.module.css';

export default function LyricsDisplay({ title, artist, lyrics }) {
  return (
    <div className={styles.lyricsContainer}>
      <h2>{title} by {artist}</h2>
      <pre className={styles.lyrics}>{lyrics}</pre>
    </div>
  );
}