import { useState } from "react";

export default function useSearchForm(onSearch) {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(artist, title);
  };

  const clearArtist = () => setArtist("");
  const clearTitle = () => setTitle("");

  return {
    artist,
    setArtist,
    title,
    setTitle,
    handleSubmit,
    clearArtist,
    clearTitle
  };
}