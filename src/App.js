import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Board2 from './components/board2/Board2';
import Board3 from './components/board3/Board3';
import Board4 from './components/board4/Board4';
import Board5 from './components/board5/Board5';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Board />
      <Board2 /> 
      <Board3 />
      <Board4 />*/}
      <Board5 />
    </div>
  );
};

export default App;