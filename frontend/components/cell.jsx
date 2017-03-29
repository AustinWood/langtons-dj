import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'green'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Rect
        x={this.props.x} y={this.props.y} width={35} height={35}
        fill={this.state.color}
        onClick={this.handleClick} />
    );
  }
}

export default Cell;
