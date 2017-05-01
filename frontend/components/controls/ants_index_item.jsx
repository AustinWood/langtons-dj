import React from 'react';

class AntsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeRhythm = this.changeRhythm.bind(this);
  }

  // selectCurrentNote() {
  //   this.props.selectNote(this.props.note);
  // }

  changeRhythm() {
    console.log(this.props.ant);
  }

  render() {
    const { question } = this.props.note;

    return (
      <img
        onClick={this.changeRhythm}
        className={'rhythm-img'}
        src={this.imgUrl(0)}
        key={this.props.ant.id} />
    );
  }
}

export default AntsIndexItem;


//   imgUrl(antNum) {
//     return 'http://res.cloudinary.com/oblaka/image/upload/v1493219023/note16_awjej6.png';
//
//     // http://res.cloudinary.com/oblaka/image/upload/v1493220171/silent_uhpgxg.png
//     // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note1_pmgjuw.png
//     // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note2_fycqcw.png
//     // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note4_hpnkli.png
//     // http://res.cloudinary.com/oblaka/image/upload/v1493219023/note8_uqcp39.png
//   }
//

//

//
//   render() {
//     return (
//       <div id='rhythm'>
//         {this.ants()}
//       </div>
//     );
//   }
// }
//
// export default Rhythm;
