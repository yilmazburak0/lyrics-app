"use client";

import styles from "./page.module.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import LyricsDisplay from "./components/LyricsDisplay";
import ErrorMessage from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import useLyrics from "./hooks/useLyrics";

export default function Home() {
  const { lyrics, loading, error, displayInfo, fetchLyrics } = useLyrics();

  return (
    <div className={styles.container}>
      <Title>Lyrics Finder</Title>
      
      <SearchForm onSearch={fetchLyrics} loading={loading} />
      
      {error && <ErrorMessage message={error} />}
      
      {loading ? (
        <div className={styles.loadingContainer}>
          <Loading dark={true} />
        </div>
      ) : (
        lyrics && (
          <LyricsDisplay 
            title={displayInfo.title} 
            artist={displayInfo.artist} 
            lyrics={lyrics}
          />
        )
      )}
    </div>
  );
}