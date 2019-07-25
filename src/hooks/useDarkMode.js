import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

export default function useDarkMode(key, initialValue) {
  let [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const body = document.querySelector('body');
    if(darkMode) body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
  }, [darkMode]);
  return [darkMode, setDarkMode];
}