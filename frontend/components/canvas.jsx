import React from 'react';
import Cell from './cell.jsx';
import Board from './board.jsx';
import { Layer, Stage } from 'react-konva';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  cells(cellArr) {
    console.log(cellArr);
    const flattenedArr = [].concat.apply([], cellArr);
    console.log(flattenedArr);
    return (
      flattenedArr.map(cell => (
        <Cell x={cell.x} y={cell.y} color={cell.color} />
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
