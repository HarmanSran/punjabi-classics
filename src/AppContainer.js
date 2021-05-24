import { useEffect, useState } from 'react';
import App from './App';

const LYRIC_FILE_PATHS = [
  'data/ja-mur-ja.json',
  'data/pyala-rakh-de.json',
  'data/sambh-leh-dahooda.json',
];

/**
 * Ensures `tree.json` is readable and parses it as JSON
 */
const AppContainer = () => {
  const [lyrics, setLyrics] = useState(null);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const responses = await Promise.all(LYRIC_FILE_PATHS.map((path) => fetch(path)));
        const data = await Promise.all(responses.map((response) => (response.json())));
        setLyrics(data);
      } catch {
        setIsFetchError(true);
      }
    };
    fetchLyrics();
  }, []);

  if (lyrics !== null) {
    return <App lyrics={lyrics} />;
  }
  if (isFetchError) {
    return 'Oops! Something went wrong.';
  }
  return 'Loading...';
};

export default AppContainer;
