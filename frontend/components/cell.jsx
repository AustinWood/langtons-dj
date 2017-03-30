import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';
import { Circle } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked!");
    this.props.toggleAnt(this.props.x, this.props.y);
  }

  render() {
    return (
      <Circle
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.45}
        fill={this.props.color}
        onClick={this.handleClick} />
    );
  }
}

export default Cell;

// <Rect
//   x={this.props.x * this.props.cellSize}
//   y={this.props.y * this.props.cellSize}
//   width={this.props.cellSize}
//   height={this.props.cellSize}
//   fill={this.props.color}
//   onClick={this.handleClick} />
