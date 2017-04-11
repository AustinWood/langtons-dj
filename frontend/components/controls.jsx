import React from 'react';
import Slider from 'rc-slider';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: null,
      value: 10
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    if (this.state.stepCount !== this.props.stepCount) {
      this.state.stepCount = this.props.stepCount;
      this.update();
    }
  }

  update() {
    let cells = this.props.cells;
    let ants = this.props.ants;
    let rules = this.props.rules;
    let music = {};
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        let ant = ants[key];
        const currentState = ant.currentState;
        let cell = cells[currentState.pos.y][currentState.pos.x];
        const currentCellState = cell.state || 0;
        music[key] = currentCellState;

        // Change cell state
        if (rules.hasOwnProperty(cell.state + 1)) {
          cell.state += 1;
        } else {
          cell.state = 0;
        }

        // Rotate ant
        const rotateRight = rules[currentCellState].rotateRight;
        const mapRightRotate = {r: 'd', d: 'l', l: 'u', u: 'r'};
        const mapLeftRotate = {r: 'u', u: 'l', l: 'd', d: 'r'};
        if (rotateRight) {
          ant.nextState.dir = mapRightRotate[ant.currentState.dir];
        } else {
          ant.nextState.dir = mapLeftRotate[ant.currentState.dir];
        }

        // Move ant
        let x = ant.currentState.pos.x;
        let y = ant.currentState.pos.y;
        switch (ant.nextState.dir) {
          case 'r':
            x < 19 ? x += 1 : x = 0;
            break;
          case 'd':
            y < 19 ? y += 1 : y = 0;
            break;
          case 'l':
            x > 0 ? x -= 1 : x = 19;
            break;
          case 'u':
            y > 0 ? y -= 1 : y = 19;
            break;
          default:
            break;
        }
        ant.nextState.pos = { x: x, y: y };

        // Save changes
        ants[key] = ant;
        cells[cell.y][cell.x] = cell;
      }
    }
    this.props.saveNextGrid(cells, ants, music);
  }

  onChange(value) {
    this.props.changeTempo(value);
    // console.log(value); //eslint-disable-line
  }

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
        <Slider min={20} max={300} defaultValue={120} onChange={this.onChange} />
      </div>
    );
  }
}

export default Controls;
