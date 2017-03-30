import React from 'react';
import ReactDOM from 'react-dom';
import { Circle } from 'react-konva';

class Ant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendering ant");
    console.log(this.props);
    return (
      <Circle
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.25}
        fill={this.props.color}
        fill={'red'} />
    );
  }
}

export default Ant;
