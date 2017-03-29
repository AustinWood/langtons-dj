import React from 'react';
import Cell from './cell.jsx';
import Board from './board.jsx';
import { Layer, Stage } from 'react-konva';

const App = () => (
  <Stage width={700} height={700}>
    <Layer>
      <Board width={700} height={700} />
      <Cell x={10} y={10} />
      <Cell x={150} y={190} />
    </Layer>
  </Stage>
);

export default App;
