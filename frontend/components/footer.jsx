import React from 'react';
import About from './about';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <div id="footer-links">
          <a href={githubUrl}><img src={github} /></a>
          <a href={homeUrl}><img src={home} /></a>
          <a href={linkedinUrl}><img src={linkedin} /></a>
        </div>
        <About />
      </div>
    );
  }
}

export default Footer;

const githubUrl = "https://github.com/AustinWood/langtons-dj";
const homeUrl = "http://austin.bio/";
const linkedinUrl = "https://www.linkedin.com/in/austinkwood/";

const github = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/github_uanjms.png";
const home = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/home_d4qoth.png";
const linkedin = "http://res.cloudinary.com/oblaka/image/upload/v1493828482/linkedin_ynobif.png";
