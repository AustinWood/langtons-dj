import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';

class Canvas extends React.Component {
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
        x={10} y={10} width={50} height={50}
        fill={this.state.color}
        onClick={this.handleClick} />
    );
  }
}

export default Canvas;
