import React from 'react';
import ReactDOM from 'react-dom';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalHandler: null };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const newHandler = window.setInterval(this.update, 10);
    this.setState({ intervalHandler: newHandler });
    // this.update();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.update();
  }

  update() {
    let cells = this.props.cells;
    let ants = this.props.ants;
    let rules = this.props.rules;
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        // TODO: store copies of cell and ant, then put them back in their respective arrays after mutations
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
        switch (currentCellState) {
          case 1:
            cell.state = 0;
            break;
          default:
            cell.state = 1;
            break;
        }

        // move ant
        switch (ant.dir) {
          case 'r':
            if (ant.x < 19) {
              ant.x += 1;
            } else {
              ant.x = 0;
            }
            break;
          case 'd':
            if (ant.y < 19) {
              ant.y += 1;
            } else {
              ant.y = 0;
            }
            break;
          case 'l':
            if (ant.x > 0) {
              ant.x -= 1;
            } else {
              ant.x = 19;
            }
            break;
          case 'u':
            if (ant.y > 0) {
              ant.y -= 1;
            } else {
              ant.y = 19;
            }
            break;
          default:
            console.log('unrecogized ant direction in state');
        }
        ants[key] = ant;
        cells[cell.y][cell.x] = cell;
      }
    }

    this.props.incrementStep(cells, ants);
  }

  render() {
    return (<div></div>);
  }
}

export default Controls;
