import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello react',
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((response) => response.json())
      .then((rockets) => console.log(rockets));
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.message}</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <button onClick={() => this.setState({ message: 'Hello world!' })}>
            Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
