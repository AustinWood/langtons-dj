import React from 'react';
import ReactDOM from 'react-dom';
import { Circle } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const cell = this.refs.cell;
    cell.setFill('#282c34');
  }

  componentDidUpdate() {
    this.colorTransition();
  }

  colorTransition() {
    const cell = this.refs.cell;
    cell.to({
        fill: this.props.color,
        duration: 0.15
    });
  }

  render() {
    return (
      <Circle
        ref='cell'
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.45} />
    );
  }
}

export default Cell;
