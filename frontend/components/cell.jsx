import React from 'react';
import ReactDOM from 'react-dom';
import { Rect } from 'react-konva';
import { Circle } from 'react-konva';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
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
        // fill: this.mix(this.props.color, 'ffffff', 50),
        fill: this.props.color,
        duration: 0.15
    });
  }

  handleClick() {
    this.props.toggleAnt(this.props.x, this.props.y);
  }

  onMouseEnter() {
    this.props.hover(this.props.x, this.props.y);
  }

  onMouseLeave() {
    this.props.hover(null, null);
  }

  mix(color1, color2, weight = 50) {
    console.log("IN THE MIX");

    // debugger;
    function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
    function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal

    var color = "#";

    for(var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
      var v1 = h2d(color1.substr(i, 2)), // extract the current pairs
          v2 = h2d(color2.substr(i, 2)),
          // combine the current pairs from each source color, according to the specified weight
          val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));
      console.log(v1);
      console.log(v2);

      while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit

      color += val; // concatenate val to our new color string
    }
    console.log("before return");
    console.log(color);
    return color;
  }
// onClick={this.handleClick}
  render() {
    return (
      <Circle
        ref='cell'
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.45}

        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} />
    );
  }
}

export default Cell;
