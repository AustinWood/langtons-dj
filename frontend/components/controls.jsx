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
        const currentCellState = cells[ants[key].y][ants[key].x].state || 0;

        // rotate ant
        const rotateRight = rules[currentCellState].rotateRight;
        const mapRightRotate = {r: 'd', d: 'l', l: 'u', u: 'r'};
        const mapLeftRotate = {r: 'u', u: 'l', l: 'd', d: 'r'};
        if (rotateRight) {
          ants[key].dir = mapRightRotate[ants[key].dir];
        } else {
          ants[key].dir = mapLeftRotate[ants[key].dir];
        }

        // change cell state
        switch (currentCellState) {
          case 1:
            cells[ants[key].y][ants[key].x].state = 0;
            break;
          default:
            cells[ants[key].y][ants[key].x].state = 1;
            break;
        }

        // move ant
        switch (ants[key].dir) {
          case 'r':
            if (ants[key].x < 19) {
              ants[key].x += 1;
            } else {
              ants[key].x = 0;
            }
            break;
          case 'd':
            if (ants[key].y < 19) {
              ants[key].y += 1;
            } else {
              ants[key].y = 0;
            }
            break;
          case 'l':
            if (ants[key].x > 0) {
              ants[key].x -= 1;
            } else {
              ants[key].x = 19;
            }
            break;
          case 'u':
            if (ants[key].y > 0) {
              ants[key].y -= 1;
            } else {
              ants[key].y = 19;
            }
            break;
          default:
            console.log('unrecogized ant direction in state');
        }
      }
    }
    
    this.props.incrementStep(cells, ants);
  }

  render() {
    return (<div></div>);
  }
}

export default Controls;
