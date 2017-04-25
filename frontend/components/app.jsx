import React from 'react';
import CanvasContainer from './canvas/canvas_container';
import ControlsContainer from './controls/controls_container';
import SequencerContainer from './sequencer/sequencer_container';

const App = () => (
  <div id="app">
    <CanvasContainer />
    <ControlsContainer />
    <SequencerContainer />
  </div>
);

export default App;
