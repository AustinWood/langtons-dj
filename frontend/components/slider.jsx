import React from 'react';
import InputRange from 'react-input-range';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {

  }

  onChange(component, values) {
    console.log(value); //eslint-disable-line
  }

  render() {
    return (
      <div id='nav'>
        <InputRange
          width={100}
          height={100}
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
      </div>
    );
  }
}

export default Slider;
