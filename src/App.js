import { Component, Fragment } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Modal } from './components/Modal';

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
        <h1 className="head">SpaceX</h1>
        <div className='row'>
          {this.state.flights.map((flight) => (
            <Fragment>
              <Card flight={flight} />
              <Modal flight={flight} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
