import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'lodash/merge';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.handleHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isPlaying) {
      console.log(this.props);
      this.playSound();
    }
  }

  playSound() {

  }

  ///////////////
  ///// Render
  render() {
    return (
      <div id='music'>
        The music div
      </div>
    );
  }
}

export default Music;
