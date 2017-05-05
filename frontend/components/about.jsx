import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about">
        <p>Langton's ant is an example of a cellular automaton. Typically thought of as a <i>visualization</i> of mathematical-based evolution, my goal with Langton's DJ is to give us an additional dimension — a dimension of <i>musicality</i> — from which to observe and appreciate the complex emergent behavior which results from a simple set of rules and initial conditions.</p>
        <p>Each beat ants rotate either left or right depending on which color they are currently located, then move forward one step while changing the color of the cell they just left.</p>
        <p>While all ants follow the same set of rules for movement, in Langton's DJ, each ant is responsible for one voicing in the deterministically emergent four-point harmony: soprano, alto, tenor and bass. Similar to the rules for movement, each ant has a set of rules that determines which note it should play based on which color it is situated.</p>
        <p>For example, the rules for the Tetrachords configuration are as follows:</p>
        <table>
          <tr>
            <th className="row-header">Color</th>
            <th><div className="table-circle" id="blue-circle"></div></th>
            <th><div className="table-circle" id="green-circle"></div></th>
            <th><div className="table-circle" id="pink-circle"></div></th>
            <th><div className="table-circle" id="purple-circle"></div></th>
            <th><div className="table-circle" id="yellow-circle"></div></th>
          </tr>
          <tr>
            <th className="row-header">Direction</th>
            <th>Right</th>
            <th>Left</th>
            <th>Right</th>
            <th>Right</th>
            <th>Left</th>
          </tr>
          <tr>
            <th className="row-header">Soprano</th>
            <th>B5</th>
            <th>C5</th>
            <th>A5</th>
            <th>B♭6</th>
            <th>A6</th>
          </tr>
          <tr>
            <th className="row-header">Alto</th>
            <th>B4</th>
            <th>C4</th>
            <th>A4</th>
            <th>B♭5</th>
            <th>A5</th>
          </tr>
          <tr>
            <th className="row-header">Tenor</th>
            <th>G♭3</th>
            <th>E♭3</th>
            <th>A♭3</th>
            <th>D4</th>
            <th>A♭4</th>
          </tr>
          <tr>
            <th className="row-header">Bass</th>
            <th>E2</th>
            <th>F3</th>
            <th>G3</th>
            <th>D♭</th>
            <th>F3</th>
          </tr>
        </table>
        <p>I am very grateful to the music theory subreddit community for helping me come up with the different arrangement of notes. If you're interested in joining the discussion, or just want to read what a lot of smart music theorists think about cellular automata, I invite you to check out my thread: <a href="https://www.reddit.com/r/musictheory/comments/63uhqi/collections_of_notes_that_will_sound_good/?sort=new">Collections of notes that will sound good together for random music generator?</a></p>
        <p>This project was built using React and the Tone.js audio framework. For a deeper look at the technical side of this project, <a href="https://github.com/AustinWood/langtons-dj">check out the README and full source code on GitHub.</a></p>
      </div>
    );
  }
}

export default About;
