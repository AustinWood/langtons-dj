import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     color: Konva.Util.getRandomColor()
  //   });
  // }

  render() {
    return (
      <Rect
        x={this.props.x * this.props.cellSize}
        y={this.props.y * this.props.cellSize}
        width={this.props.cellSize}
        height={this.props.cellSize}
        fill={this.props.color}
        onClick={this.handleClick} />
    );
  }
}

export default Cell;
