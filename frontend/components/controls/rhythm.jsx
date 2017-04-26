import React from 'react';

class Rhythm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imgUrl(antNum) {
    return 'http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png';
  }

  render() {
    return (
      <div id='rhythm'>

        <img
          onClick={this.props.reset}
          className={'rhythm-img'}
          src={this.imgUrl(0)} />

      </div>
    );
  }
}

export default Rhythm;
