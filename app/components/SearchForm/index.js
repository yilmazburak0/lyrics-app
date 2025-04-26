import styles from './SearchForm.module.css';
import { IoMdClose } from "react-icons/io";
import useSearchForm from "../../hooks/useSearchForm";

export default function SearchForm({ onSearch, loading }) {
  const {
    artist,
    setArtist,
    title,
    setTitle,
    handleSubmit,
    clearArtist,
    clearTitle
  } = useSearchForm(onSearch);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="artist">Artist</label>
        <div className={styles.inputWrapper}>
          <input
            id="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Enter artist name"
            className={styles.input}
          />
          {artist && (
            <button
              type="button"
              onClick={clearArtist}
              className={styles.clearButton}
              aria-label="Clear artist input"
            >
              <IoMdClose />
            </button>
          )}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="title">Song Title</label>
        <div className={styles.inputWrapper}>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter song title"
            className={styles.input}
          />
          {title && (
            <button
              type="button"
              onClick={clearTitle}
              className={styles.clearButton}
              aria-label="Clear title input"
            >
              <IoMdClose />
            </button>
          )}
        </div>
      </div>

      <button 
        type="submit" 
        className={styles.button}
        disabled={loading}
      >
        {loading ? "Searching..." : "Find Lyrics"}
      </button>
    </form>
  );
}