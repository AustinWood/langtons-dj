import React from 'react';
import ReactDOM from 'react-dom';

class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.update();
  }

  update() {
    console.log("update!");
  }

  render() {
    return (<div></div>);
  }
}

export default Controls;

// <Rect
//   x={this.props.x * this.props.cellSize}
//   y={this.props.y * this.props.cellSize}
//   width={this.props.cellSize}
//   height={this.props.cellSize}
//   fill={this.props.color}
//   onClick={this.handleClick} />
