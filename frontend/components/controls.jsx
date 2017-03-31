import React from 'react';
import ReactDOM from 'react-dom';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalHandler: null };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const newHandler = window.setInterval(this.update, 200);
    this.setState({ intervalHandler: newHandler });
  }

  componentDidUpdate(prevProps, prevState) {
    //
  }

  update() {
    let cells = this.props.cells;
    let ants = this.props.ants;
    let rules = this.props.rules;
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        let ant = ants[key];
        let cell = cells[ant.y][ant.x];
        const currentCellState = cell.state || 0;

        // rotate ant
        const rotateRight = rules[currentCellState].rotateRight;
        const mapRightRotate = {r: 'd', d: 'l', l: 'u', u: 'r'};
        const mapLeftRotate = {r: 'u', u: 'l', l: 'd', d: 'r'};
        if (rotateRight) {
          ant.dir = mapRightRotate[ant.dir];
        } else {
          ant.dir = mapLeftRotate[ant.dir];
        }

        // change cell state
        if (rules.hasOwnProperty(cell.state + 1)) {
          cell.state += 1;
        } else {
          cell.state = 0;
        }

        // move ant
        switch (ant.dir) {
          case 'r':
            ant.x < 19 ? ant.x += 1 : ant.x = 0;
            break;
          case 'd':
            ant.y < 19 ? ant.y += 1 : ant.y = 0;
            break;
          case 'l':
            ant.x > 0 ? ant.x -= 1 : ant.x = 19;
            break;
          case 'u':
            ant.y > 0 ? ant.y -= 1 : ant.y = 19;
            break;
          default:
            console.log('unrecogized ant direction');
        }

        ants[key] = ant;
        cells[cell.y][cell.x] = cell;
      }
    }

    this.props.incrementStep(cells, ants);
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default Controls;
