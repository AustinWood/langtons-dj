import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';
import { Circle } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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
        // scaleX: Math.random() + 0.8,
        // scaleY: Math.random() + 0.8,
        fill: this.props.color,
        duration: 0.5
    });
  }

  handleClick() {
    this.props.toggleAnt(this.props.x, this.props.y);
  }

  render() {
    return (
      <Circle
        ref='cell'
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.45}
        onClick={this.handleClick} />
    );
  }
}

export default Cell;
