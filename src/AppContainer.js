import { useEffect, useState } from 'react';
import App from './App';

const LYRIC_FILE_NAMES = [
  'aisi-lagi-lagan',
  'ajab-andaz',
  'ja-mur-ja',
  'kamli',
  'kiven-mukhre-ton',
  'kithe-ishq-da-rog',
  'punjab-di-malika',
  'pyala-rakh-de',
  'sambh-leh-dahooda',
  'sar-jhukaya-ton',
  'sun-charkhe-di',
  'tere-tille-ton',
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
