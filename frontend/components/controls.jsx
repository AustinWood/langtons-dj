import React from 'react';
import ReactDOM from 'react-dom';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalHandler: null };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const newHandler = window.setInterval(this.update, 1000);
    this.setState({ intervalHandler: newHandler });
    // this.update();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.update();
  }

  update() {
    this.props.incrementStep();
  }

  render() {
    return (<div></div>);
  }
}

export default Controls;
