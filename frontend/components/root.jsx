import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <h1>привет,чувак</h1>
      <canvas id="demoCanvas" width="500" height="300"></canvas>
    </Provider>
  );
};

export default Root;
