import React from 'react';
import logo from './logo.svg';
import './App.css';
import KanjiList from './kanjis/kanjislist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://banner2.cleanpng.com/20190216/qeb/kisspng-zen-buddhism-symbol-japanese-calligraphy-5c680bc5e67b48.1989893615503226299441.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for learning Kanji
        </p>
        <h1>
          Kanji Learn
        </h1>
        <KanjiList />
      </header>
    </div>
  );
}

export default App;
