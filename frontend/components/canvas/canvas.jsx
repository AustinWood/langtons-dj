import React from 'react';
import Konva from 'konva';
import { Layer, Stage, Circle } from 'react-konva';

import Board from './board.jsx';
import CellContainer from './cell_container.jsx';
import AntContainer from './ant_container.jsx';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setupGrid = this.setupGrid.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setupGrid, 5);
  }

  setupGrid() {
    this.props.toggleAnt({x: 4, y: 12});
    this.props.toggleAnt({x: 7, y: 4});
    this.props.toggleAnt({x: 13, y: 10});
    this.props.toggleAnt({x: 15, y: 12});
  }

  handleClick(e) {
    this.props.toggleAnt(this.convertToGridCoords(e));
  }

  onMouseOver(e) {
    this.props.hover(this.convertToGridCoords(e));
  }

  onMouseLeave() {
    this.props.hover({ x: null, y: null });
  }

  convertToGridCoords(e) {
    const pointerPosition = e.target.getStage().getPointerPosition();
    const xClick = pointerPosition.x;
    const yClick = pointerPosition.y;
    const cellSize = this.props.cellSize;
    const x = (xClick - (xClick % cellSize)) / cellSize;
    const y = (yClick - (yClick % cellSize)) / cellSize;
    return { x: x, y: y };
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
        antComponents.push(<AntContainer currentState={ant.currentState} key={ant.id} />);
      }
    }
    return antComponents;
  }

  hover() {
    if (this.props.hoverPos.x !== null && this.props.hoverPos.y !== null) {
      return (
        <Circle
          ref='hover'
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

  render() {
    return (
      <div id="canvas-container">

        <div id="overlay" className={this.props.overlayHidden ? "hidden" : "not-hidden"}>
          <h1>Welcome to Langton's DJ!</h1>
          <h2>Click the play button on the left to start generating audio-visual masterpieces, or scroll down to learn more about this project.</h2>
          <h2>Enjoy the beauty of mathematics!</h2>
          <h3 onClick={this.props.closeOverlay}>Close</h3>
        </div>

        <Stage
          ref='stage'
          width={700}
          height={700}
          onClick={this.handleClick}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave} >

          <Layer>
            <Board width={700} height={700} />
            {this.cells()}
            {this.ants()}
            {this.hover()}
          </Layer>

        </Stage>
      </div>
    );
  }
}

export default Canvas;
