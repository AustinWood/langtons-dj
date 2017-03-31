import React from 'react';
import Board from './board.jsx';
import CellContainer from './cell_container.jsx';
import AntContainer from './ant_container.jsx';
import { Layer, Stage } from 'react-konva';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  cells() {
    const cellArr = this.props.cells;
    const flattenedArr = [].concat.apply([], cellArr);
    return (
      flattenedArr.map(cell => (
        <CellContainer x={cell.x} y={cell.y} key={`x${cell.x}y${cell.y}`} />
      ))
    );
  }

  ants() {
    const ants = this.props.ants;
    let antComponents = [];
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        const ant = ants[key];
        antComponents.push(<AntContainer x={ant.x} y={ant.y} key={`x${ant.x_0}y${ant.y_0}`} />);
      }
    }
    return antComponents;
  }

  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <Board width={700} height={700} />
          {this.cells()}
          {this.ants()}
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
