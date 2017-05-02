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
    this.props.changeRhythm(this.props.ant.id);
  }

  rhythmImg() {
    const rhythmMap = {
      0: "http://res.cloudinary.com/oblaka/image/upload/v1493220171/silent_uhpgxg.png",
      1: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note1_pmgjuw.png",
      2: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note2_fycqcw.png",
      4: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note4_hpnkli.png",
      8: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note8_uqcp39.png",
      16: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png"
    };
    return rhythmMap[this.props.ant.rhythm];
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
