import { useState } from "react";

export default function useLyrics() {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayInfo, setDisplayInfo] = useState({ artist: "", title: "" });

  const fetchLyrics = async (artist, title) => {
    if (!artist || !title) {
      setError("Please enter both artist and song title");
      setLyrics("");
      return;
    }

    setLoading(true);
    setLyrics("");
    setError(null);

    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      const data = await response.json();
      
      if (response.ok) {
        setLyrics(data.lyrics);
        setDisplayInfo({ artist, title });
      } else {
        setError(data.error || "Could not find lyrics for this song");
        setLyrics("");
      }
    } catch (err) {
      setError("An error occurred while fetching lyrics. Please try again later.");
      setLyrics("");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    lyrics,
    loading,
    error,
    displayInfo,
    fetchLyrics,
  };
}