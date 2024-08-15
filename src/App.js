import React from 'react';

import './App.css';

import NameBox from './components/NameBox';
import LinkList from './components/LinkList';

const App = () => {
  return (
    <>
      <main>
        <NameBox />
        <LinkList />
      </main>
      <p className="closeBracket">{'}'}</p>
    </>
  );
};
export default App;
