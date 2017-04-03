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
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
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
    if (this.props.hoverPos.x !== null && this.props.hoverPos.y !== null) {
      console.log("return somethin");
      return (
        <Circle
          ref='cell'
          x={this.props.hoverPos.x * this.props.cellSize + this.props.cellSize / 2}
          y={this.props.hoverPos.y * this.props.cellSize + this.props.cellSize / 2}
          radius={this.props.cellSize * 0.45}
          fill={null}
          stroke={'white'}
          strokeWidth={2} />
      );
    }
    return null;
  }

  convertToGridCoords(e) {
    const pointerPosition = e.target.getStage().getPointerPosition();
    const xClick = pointerPosition.x;
    const yClick = pointerPosition.y;
    const cellSize = this.props.cellSize;
    const x = (xClick - (xClick % cellSize)) / cellSize;
    const y = (yClick - (yClick % cellSize)) / cellSize;
    return {x: x, y: y};
  }

  handleClick(e) {
    const gridCoords = this.convertToGridCoords(e);
    this.props.toggleAnt(gridCoords.x, gridCoords.y);
  }

  onMouseEnter(e) {
    const gridCoords = this.convertToGridCoords(e);
    this.props.hover(gridCoords.x, gridCoords.y);
  }

  onMouseLeave() {
    this.props.hover(null, null);
  }

  render() {
    return (
      <Stage
        ref='stage'
        width={700}
        height={700}
        onClick={this.handleClick}
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >

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
