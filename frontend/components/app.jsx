import React from 'react';
import CanvasContainer from './canvas/canvas_container.jsx';
import ControlsContainer from './controls/controls_container.jsx';
import SequencerContainer from './sequencer/sequencer_container.jsx';

const App = () => (
  <div id="app">
    <CanvasContainer />
    <ControlsContainer />
    <SequencerContainer />
  </div>
);

export default App;
