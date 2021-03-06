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
    if (this.props.ant !== null) {
      this.props.changeRhythm(this.props.ant.id);
    }
  }

  rhythmImg() {
    const rhythmMap = {
      0: "http://res.cloudinary.com/oblaka/image/upload/v1493841811/rest_iwb4nz.png",
      1: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note1_pmgjuw.png",
      2: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note2_fycqcw.png",
      4: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note4_hpnkli.png",
      8: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note8_uqcp39.png",
      16: "http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png"
    };
    if (this.props.ant === null) {
      return (
        <img
          onClick={this.changeRhythm}
          src="http://res.cloudinary.com/oblaka/image/upload/v1493824846/clear_lq9lhy.png" />
      );
    }
    return (
      <img
        onClick={this.changeRhythm}
        className={"rhythm-img"}
        src={rhythmMap[this.props.ant.rhythm]} />
    );
  }

  render() {
    return (
      <div className="ants-index-item">
        {this.rhythmImg()}
      </div>
    );
  }
}

export default AntsIndexItem;
