import { useEffect } from 'react';
import styles from './App.module.css';

export const App = () => {
  useEffect(() => {
    console.log('HERE');
  }, []);
  return <div className={styles.App}>Hello</div>;
};
