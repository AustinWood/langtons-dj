import React from 'react';
import Slider from 'rc-slider';
import DropdownContainer from './dropdown_container';
import AntsIndexContainer from './ants_index_container';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: null,
      value: 10,
    };
    this.changeTempo = this.changeTempo.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
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

  changeTempo(value) {
    this.props.changeTempo(value);
  }

  changeVolume(value) {
    if (value === -40) {
      this.props.changeVolume(-1000);
    } else {
      this.props.changeVolume(value);
    }
  }

  volumeImg() {
    const volume = this.props.volume;
    if (volume === -1000) {
      return volumeZero;
    } else if (volume < -25) {
      return volumeLow;
    } else if (volume < -10) {
      return volumeMed;
    }
    return volumeHigh;
  }

  render() {
    return (
      <div id="nav">

        <div id="logo">
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1494433705/langtons-logo2_iyzjd1.jpg" />
        </div>

        <div id="play-controls">
          <img
            onClick={this.props.reset}
            id={'stop'}
            src={stop} />
          <img
            onClick={this.props.togglePlay}
            id={this.props.isPlaying ? 'pause' : 'play'}
            src={this.props.isPlaying ? pause : play} />
        </div>

        <div id="sliders">
          <div className="slider-container">
            <div className="slider-img-container"><img src={this.volumeImg()} /></div>
            <Slider min={-40} max={0} defaultValue={this.props.volume} onChange={this.changeVolume} />
          </div>

          <div className="slider-container">
            <div className="slider-img-container"><img src={metronome} /></div>
            <Slider min={20} max={300} defaultValue={this.props.tempo} onChange={this.changeTempo} />
          </div>
        </div>

        <div id="note-controls">
          <DropdownContainer />
          <AntsIndexContainer />
        </div>

      </div>
    );
  }
}

const logo1 = "http://res.cloudinary.com/oblaka/image/upload/v1493995716/logo1_xqbuak.png";
const logo2 = "http://res.cloudinary.com/oblaka/image/upload/v1493995717/logo2_uelym6.png";

const info = "http://res.cloudinary.com/oblaka/image/upload/v1493833160/info_ccma7q.png";
const stop = "http://res.cloudinary.com/oblaka/image/upload/v1490970171/stop_hg6fyp.png";
const play = "http://res.cloudinary.com/oblaka/image/upload/v1490970171/play_xfvjjv.png";
const pause = "http://res.cloudinary.com/oblaka/image/upload/v1490970171/pause_yn3cfz.png";

const volumeZero = "http://res.cloudinary.com/oblaka/image/upload/v1493825557/volume_zero_vw2id7.png";
const volumeLow = "http://res.cloudinary.com/oblaka/image/upload/v1493825557/volume_low_rs1wai.png";
const volumeMed = "http://res.cloudinary.com/oblaka/image/upload/v1493825557/volume_med_hjtg98.png";
const volumeHigh = "http://res.cloudinary.com/oblaka/image/upload/v1493825557/volume_high_wksfra.png";

const metronome = "http://res.cloudinary.com/oblaka/image/upload/v1493825557/metronome_kvgg0m.png";

export default Controls;
