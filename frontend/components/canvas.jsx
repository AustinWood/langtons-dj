import React from 'react';
import Board from './board.jsx';
import CellContainer from './cell_container.jsx';
import AntContainer from './ant_container.jsx';
import { Layer, Stage, Circle } from 'react-konva';

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

  hover() {
    console.log("in HOVER");
    if (this.props.hover.x !== null && this.props.hover.y !== null) {
      console.log("return somethin");
      return (
        <Circle
          ref='cell'
          x={this.props.hover.x * this.props.cellSize + this.props.cellSize / 2}
          y={this.props.hover.y * this.props.cellSize + this.props.cellSize / 2}
          fill="pink"
          radius={this.props.cellSize * 0.25} />
      );
    }
    return null;
  }

  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <Board width={700} height={700} />
          {this.cells()}
          {this.ants()}
          {this.hover()}
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
