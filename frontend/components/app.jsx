import React from 'react';
import CanvasGrid from './canvas_grid';
//
// const App = () => (
//   <div className="app">
//     <CanvasGrid colorBar="#FFC67F"
//                  width={500}
//                  height={300}
//                  animationSpeed={300}
//                  staggerDelay={100}
//                  hpadding={4}
//                  rotation={90}
//                  data={this.state.chartData} />
//   </div>
// );
//
// export default App;


/**
 * App
 * Render two <CanvasGrid> components and generate random data
 */
var App = React.createClass({
    // Initial state
    getInitialState: function () {
        return {chartData: []};
    },
    // Component Mount (init)
    componentDidMount: function () {
        this.updateData(10, 15, 30, 100);
    },
    // Generate random data
    updateData(minBars, maxBars, minValue, maxValue) {
        var elements = [];
        // Random Total of Bars
        var totalBars = this.random(minBars, maxBars);
        for (var i = 0; i < totalBars; i++) {
            elements.push(this.random(minValue, maxValue)); // Random Value
        }
        this.setState({
            chartData: elements
        })
    },
    // Random between numbers
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // render func
    render: function () {

        return <div>

            <CanvasGrid width={150} height={70}
                         data={this.state.chartData}></CanvasGrid>

                       <CanvasGrid colorBar="#FFC67F"
                         width={500}
                         height={300}
                         animationSpeed={300}
                         staggerDelay={100}
                         hpadding={4}
                         rotation={90}
                         data={this.state.chartData}></CanvasGrid>

            <hr/>
            <button className="btn btn-info"
                    onClick={this.updateData.bind(this, 10, 50, 10, 100)}>
                      Generate new data</button>
        </div>

    }
});

export default App;
