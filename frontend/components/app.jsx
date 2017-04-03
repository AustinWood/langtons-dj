import React from 'react';
import CanvasContainer from './canvas_container.jsx';
import ControlsContainer from './controls_container.jsx';
import MusicContainer from './music/music_container.jsx';

const App = () => (
  <div id="app">
    <CanvasContainer />
    <ControlsContainer />
    <MusicContainer />
  </div>
);

export default App;
