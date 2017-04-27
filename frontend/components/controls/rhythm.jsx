import React from 'react';

class Rhythm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imgUrl(antNum) {
    return 'http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png';

    // http://res.cloudinary.com/oblaka/image/upload/v1493220171/silent_uhpgxg.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note1_pmgjuw.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note2_fycqcw.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note4_hpnkli.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note8_uqcp39.png
  }

  ants() {
    const ants = this.props.ants;
    let antComponents = [];
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        const ant = ants[key];
        antComponents.push(
          <img
            onClick={this.props.reset}
            className={'rhythm-img'}
            src={this.imgUrl(0)}
            key={ant.id} />
        );
      }
    }
    return antComponents;
  }

  render() {
    return (
      <div id='rhythm'>
        {this.ants()}
      </div>
    );
  }
}

export default Rhythm;
