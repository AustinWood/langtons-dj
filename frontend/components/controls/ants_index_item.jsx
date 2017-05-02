import React from 'react';

const antImg = 'http://res.cloudinary.com/oblaka/image/upload/v1493737068/ant_edjrtt.png';
const antImgFilled = 'http://res.cloudinary.com/oblaka/image/upload/v1493737068/ant_filled_sviqwb.png';

class AntsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeRhythm = this.changeRhythm.bind(this);
    this.rhythmImg = this.rhythmImg.bind(this);
  }

  changeRhythm() {
    console.log(this.props.ant);
    this.props.changeRhythm(this.props.ant.id);
  }

  rhythmImg() {
    return "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png";

    // http://res.cloudinary.com/oblaka/image/upload/v1493220171/silent_uhpgxg.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note1_pmgjuw.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note2_fycqcw.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note4_hpnkli.png
    // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note8_uqcp39.png
  }

  render() {
    return (
      <div className="ants-index-item">
        <img
          className={'rhythm-img'}
          src={antImg} />
        <img
          onClick={this.changeRhythm}
          className={'rhythm-img'}
          src={this.rhythmImg()} />
      </div>
    );
  }
}

export default AntsIndexItem;
