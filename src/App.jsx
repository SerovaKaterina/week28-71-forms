import React from 'react';
import styles from './App.module.css';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        <h1 className={styles.h1}>Работа с формами в React</h1>
      </header>
      <div className={styles.app_main}>
        <TextInput />
      </div>
    </div>
  );
}

export default App;