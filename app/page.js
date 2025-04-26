"use client";

import styles from "./page.module.css";
import SearchForm from "./components/SearchForm";
import LyricsDisplay from "./components/LyricsDisplay";
import ErrorMessage from "./components/ErrorMessage";
import useLyrics from "./hooks/useLyrics";

export default function Home() {
  const { lyrics, loading, error, displayInfo, fetchLyrics } = useLyrics();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lyrics Finder</h1>
      
      <SearchForm onSearch={fetchLyrics} loading={loading} />
      
      {error && <ErrorMessage message={error} />}
      
      {lyrics && (
        <LyricsDisplay 
          title={displayInfo.title} 
          artist={displayInfo.artist} 
          lyrics={lyrics}
        />
      )}
    </div>
  );
}