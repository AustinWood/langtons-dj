import React from 'react';
import Tone from 'tone';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDispatch = this.handleDispatch.bind(this);
  }

  componentDidMount() {



    let synth = new Tone.PolySynth(3, Tone.FMSynth, {
      "oscillator" : {
        "type" : "fatsawtooth",
        "count" : 3,
        "spread" : 30
      },
      "envelope": {
        "attack": 0.01,
        "decay": 0.1,
        "sustain": 0.5,
        "release": 0.4,
        "attackCurve" : "exponential"
      },
    }).toMaster();

    let stepper = new Tone.Part(function(time, note) {
      handleDispatchB();
      synth.triggerAttackRelease(note, "32n", time);
    }, []);
    stepper.loop = true;
    stepper.loopEnd = "16n";
    stepper.start(0);
    this.state.stepper = stepper;

    let handleDispatchB = this.handleDispatch;

    // var part = new Tone.Part(function(time, note) {
    //   synth.triggerAttackRelease(note, "8n", time);
    //   handleDispatchB();
    // }, [[0, []]]);
    // part.loop = true;
    // part.loopEnd = "4n";
    // part.start(0);
    // this.state.part = part;


    // let bassSynth = new Tone.PolySynth(1, Tone.FMSynth, {
    //   "oscillator" : {
    //     "type" : "fatsawtooth",
    //     "count" : 3,
    //     "spread" : 30
    //   },
    //   "envelope": {
    //     "attack": 0.01,
    //     "decay": 0.1,
    //     "sustain": 0.5,
    //     "release": 0.4,
    //     "attackCurve" : "exponential"
    //   },
    // }).toMaster();
    //
    // var bass = new Tone.Part(function(time, note) {
    //   bassSynth.triggerAttackRelease(note, "2m", time);
    // }, [[0, []]]);
    // bass.loop = true;
    // bass.loopEnd = "2m";
    // bass.start(0);
    // this.state.bass = bass;
    //
    // let altoSynth = new Tone.PolySynth(1, Tone.FMSynth, {}).toMaster();
    //
    // var alto = new Tone.Part(function(time, note) {
    //   altoSynth.triggerAttackRelease(note, "2n", time);
    // }, [[0, []]]);
    // alto.loop = true;
    // alto.loopEnd = "2n";
    // alto.start(0);
    // this.state.alto = alto;
    //
    // let trebleSynth = new Tone.PolySynth(1, Tone.FMSynth, {}).toMaster();
    //
    // var treble = new Tone.Part(function(time, note) {
    //   trebleSynth.triggerAttackRelease(note, "32n", time);
    // }, [[0, []]]);
    // treble.loop = true;
    // treble.loopEnd = "16n";
    // treble.start(0);
    // this.state.treble = treble;



    Tone.Transport.bpm.value = 80;
    this.toggleTransport();
  }

  handleDispatch() {
    this.props.updateGrid();
  }

  componentDidUpdate() {
    this.toggleTransport();
    this.calculateChord();
  }

  calculateChord() {

    // // whole tone
    // const pentatonic = [
    //   ["C3","D3","E3","F#3","G#3"],
    //   ["A#4","C4","D4","E4","F#4"],
    //   ["G#4","A#5","C5","D5","E5"],
    //   ["F#5","G#5","A#6","C6","D6"]
    // ];

    // "G", "E", "D#", "F#", "C#", "F", "D", "B", "Bb", "C" "A" G#
    //
    // Ant 2: G B♭ B G# C# A C E♭ E D F G♭
    //
    // Ant 3: D D# F# E F G# B G C A A# C#
    //
    // Ant 4: C B G# B♭ A F# E♭ G D F E C#

    const pentatonic = [ // broodfood
      ["C2", "C3", "C4", "C5", "C6"],
      ["G3", "G4", "G5", "F3", "F4"],
      ["E3", "E4", "E5", "A3", "A4"],
      ["C2", "C3", "C4", "C5", "C6"]
    ];
    // const pentatonic = [ // Tetrachords
    //   ["E2", "F3", "G3", "Db3", "F3"],
    //   ["Gb3", "Eb3", "Ab3", "D4", "Ab4"],
    //   ["B4", "C4", "A4", "Bb5", "A5"],
    //   ["B5", "C5", "A5", "Bb6", "A6"]
    // ];
    // const pentatonic = [ // Trichords
    //   ["E2", "F2", "C#2", "E2", "F2"],
    //   ["Eb3", "C3", "D3", "Eb3", "C3"],
    //   ["G#4", "A4", "Bb4", "G#4", "A4"],
    //   ["F#5", "G5", "B5", "F#5", "G5"]
    // ];
    // const pentatonic = [ // Tetrachords
    //   ["E2", "F3", "G3", "Db3", "F3"],
    //   ["Gb3", "Eb3", "Ab3", "D4", "Ab4"],
    //   ["B4", "C4", "A4", "Bb5", "A5"]
    // ];
    // const pentatonic = [
    //   ["D2", "A3", "D3", "A3", "D3"],
    //   ["F3", "G3", "A3", "C4", "D4"],
    //   ["E4", "G4", "A4", "C5", "D5"]
    // ];
    // const pentatonic = [
    //   ["C3", "D3", "E3", "F#3", "G#3", "A#3"],
    //   ["C4", "D4", "E4", "F#4", "G#4", "A#4"],
    //   ["C5", "D5", "E5", "F#5", "G#5", "A#5"],
    //   ["C6", "D6", "E6", "F#6", "G#6", "A#6"]
    // ];
    // const pentatonic = [
    //   ["C3","E3","D3","E3","D3"],
    //   ["G4","F#4","G4","F#4","G4"],
    //   ["B5","D5","A5","B5","A5"]
    // ];
    // ["C3","E3","D3","D3","D3"],
    // ["G4","G4","G4","F#4","G4"],
    // ["B5","D5","A5","A5","A5"]
    let newChord = [];
    let bassNote = [];
    let altoNote = [];
    const chordObj = this.props.chord;
    let i = 0;
    for (var key in chordObj) {
      if (chordObj.hasOwnProperty(key)) {
        const pentatonicSub = pentatonic[i];
        if (pentatonicSub != null) {
          const cellState = chordObj[key];
          const note = pentatonicSub[cellState];
          newChord.push(note);
          // if (i == 0) {
          //   console.log(note);
          //   console.log(this.props.stepCount);
          //   bassNote.push(note);
          // } else if (i === 1) {
          //   altoNote.push(note);
          // } else {
          //   newChord.push(note);
          // }
        }
        i += 1;
      }
    }

    // console.log(newChord);
    this.state.stepper.removeAll();
    this.state.stepper.add(0, newChord);

    // if (this.props.stepCount % 8 === 1) {
    //   this.state.bass.removeAll();
    //   this.state.bass.add(0, bassNote);
    // }
    // if (this.props.stepCount % 4 === 1) {
    //   this.state.alto.removeAll();
    //   this.state.alto.add(0, altoNote);
    // }
  }

  toggleTransport() {
    if (this.props.isPlaying && Tone.Transport.state !== "started") {
      Tone.Transport.start();
    } else if (!this.props.isPlaying && Tone.Transport.state === "started") {
      Tone.Transport.stop();
    }
  }

  render() {
    return (<div />);
  }
}
