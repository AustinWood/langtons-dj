import React from 'react';
import ReactDOM from 'react-dom';
import { Circle, Image } from 'react-konva';
import Konva from 'konva';

class Ant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Circle
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.25}
        fill={this.props.color} />
    );
  }
}

export default Ant;
