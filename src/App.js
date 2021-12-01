import { Component } from 'react';
import './App.css';
import { Card } from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.state = {
      flights: [],
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((response) => response.json())
      .then((flights) => this.setState({ flights: flights }));
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.flights.map((flight) => (
            <Card flight={flight} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
