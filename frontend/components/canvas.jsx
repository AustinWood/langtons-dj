import React from 'react';
import Board from './board.jsx';
import CellContainer from './cell_container.jsx';
import AntContainer from './ant_container.jsx';
import { Layer, Stage, Circle } from 'react-konva';
import Konva from 'konva';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
          radius={this.props.cellSize * 0.45}
          fill={null}
          stroke={'white'}
          strokeWidth={2} />
      );
    }
    return null;
  }

  handleClick(e) {
    console.log('native event', e.evt);
    console.log('Konva.Circle instance', e.target);
    console.log('mouse position on canvas', e.target.getStage().getPointerPosition());
    const clickPosition = e.target.getStage().getPointerPosition();
    const xClick = clickPosition.x;
    const yClick = clickPosition.y;
    const cellSize = this.props.cellSize;
    const x = (xClick - (xClick % cellSize)) / cellSize;
    const y = (yClick - (yClick % cellSize)) / cellSize;
    console.log(`grid_x: ${x}, grid_y: ${y}`);
    this.props.toggleAnt(x, y);
  }

  render() {
    return (
      <Stage ref='stage' width={700} height={700} onClick={this.handleClick}>
        <Layer>
          <Board width={700} height={700} />
          {this.hover()}
          {this.cells()}
          {this.ants()}
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
