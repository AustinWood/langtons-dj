import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'lodash/merge';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalHandler: null };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.handleHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleHandler();
  }

  handleHandler() {
    const handler = this.state.intervalHandler;
    if (this.props.isPlaying && handler === null) {
      const newHandler = window.setInterval(this.update, 300);
      this.setState({ intervalHandler: newHandler });
    } else if (!this.props.isPlaying && handler) {
      window.clearInterval(handler);
      this.setState({ intervalHandler: null });
      // this.props.reset();
    }
  }

  update() {
    // if (!this.props.isPlaying) { return; }
    let cells = this.props.cells;
    let ants = merge({}, this.props.ants);
    let rules = this.props.rules;
    let lastCellState;
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        let ant = ants[key];
        let cell = cells[ant.y][ant.x];
        const currentCellState = cell.state || 0;
        lastCellState = currentCellState;

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
    let music = {currentCellState: lastCellState};
    this.props.incrementStep(cells, ants, music);
  }

  ///////////////
  ///// Buttons



  ///////////////
  ///// Render
  render() {
    return (
      <div id='nav'>
        <img
          onClick={this.props.reset}
          id={'stop'}
          src={'http://res.cloudinary.com/oblaka/image/upload/v1490970171/stop_hg6fyp.png'} />
        <img
          onClick={this.props.togglePlay}
          id={this.props.isPlaying ? 'pause' : 'play'}
          src={this.props.isPlaying ? 'http://res.cloudinary.com/oblaka/image/upload/v1490970171/pause_yn3cfz.png' : 'http://res.cloudinary.com/oblaka/image/upload/v1490970171/play_xfvjjv.png'} />
      </div>
    );
  }
}

export default Controls;
