import { useEffect, useState } from 'react';
import App from './App';

const LYRIC_FILE_NAMES = [
  'ja-mur-ja',
  'pyala-rakh-de',
  'sambh-leh-dahooda',
  'aisi-lagi-lagan',
  'tere-tille-ton',
  'ajab-andaz',
];

const AppContainer = () => {
  const [lyricsList, setLyricsList] = useState(null);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const responses = await Promise.all(LYRIC_FILE_NAMES.map((name) => fetch(`data/${name}.json`)));
        const data = await Promise.all(responses.map((response) => (response.json())));
        setLyricsList(data);
      } catch {
        setIsFetchError(true);
      }
    };
    fetchLyrics();
  }, []);

  if (lyricsList !== null) {
    return <App lyricsList={lyricsList} />;
  }
  if (isFetchError) {
    return 'Oops! Something went wrong.';
  }
  return 'Loading...';
};

export default AppContainer;
