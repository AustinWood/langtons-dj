import React from 'react';
import Cell from './cell.jsx';
import Board from './board.jsx';
import { Layer, Stage } from 'react-konva';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  cells(cellsArr) {
    console.log(cellsArr);
    return (
      [10, 30, 50, 200].map(pos => (
        <Cell x={pos} y={pos} />
      ))
    );
  }

  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <Board width={700} height={700} />
          {this.cells(this.props.cells)}
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
