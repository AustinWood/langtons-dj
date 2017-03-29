import React from 'react';
import Cell from './cell.jsx';
import Board from './board.jsx';
import { Layer, Stage } from 'react-konva';

const cells = () => (
  [10, 30, 50, 200].map(pos => (
    <Cell x={pos} y={pos} />
  ))
);


// <Cell x={150} y={190} />
const Canvas = () => (
  <Stage width={700} height={700}>
    <Layer>
      <Board width={700} height={700} />
      {cells()}
    </Layer>
  </Stage>
);

export default Canvas;
