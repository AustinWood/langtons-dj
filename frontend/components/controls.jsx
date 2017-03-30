import React from 'react';
import ReactDOM from 'react-dom';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalHandler: null };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const newHandler = window.setInterval(this.update, 1000);
    this.setState({ intervalHandler: newHandler });
    // this.update();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.update();
  }

  update() {
    console.log(this.props);
    let cells = this.props.cells;
    let ants = this.props.ants;
    let rules = this.props.rules;
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {

        // rotate ant
        // const currentCellState = newState.cells[newState.ants[key].y][newState.ants[key].x].state;
        // const rotateRight =

        // change cell state
        switch (cells[ants[key].y][ants[key].x].state) {
          case 1:
            console.log("HIT THE CASE!");
            cells[ants[key].y][ants[key].x].state = 0;
            break;
          default:
            cells[ants[key].y][ants[key].x].state = 1;
            break;
        }

        // move ant
        if (ants[key].x < 19) {
          ants[key].x += 1;
        } else {
          ants[key].x = 0;
        }

      }
    }
    // calculate cell states and ant positions and pass in here
    this.props.incrementStep(cells, ants);
  }

  render() {
    return (<div></div>);
  }
}

export default Controls;
