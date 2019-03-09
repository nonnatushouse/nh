import React, { Component } from 'react';
import './App.css';
import Timer from './Timer'

class App extends Component {
  state = {date: new Date(Date.UTC(2019, 11, 25, 20, 0, 0))}

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (<>
      
      <div className='page-container'>
        <Timer date={this.state.date} />
      </div>
</>
    );
  }
}

export default App;
