import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <img src={github} />
        <img src={home} />
        <img src={linkedin} />
      </div>
    );
  }
}

export default Footer;

const github = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/github_uanjms.png";
const home = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/home_d4qoth.png";
const linkedin = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/linkedin_ynobif.png";
