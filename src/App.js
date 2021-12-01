import { Component, Fragment } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
// import { LaunchYearFilter } from './components/filters/LaunchYearFilter';
// import { LaunchStatusFilter } from './components/filters/LaunchStatusFilter';
// import { UpcomingFilter } from './components/filters/UpcomingFilter';

class App extends Component {
  constructor() {
    super();

    this.state = {
      flights: [],
      searchFlights: '',
      // selectedYear: 0,
      // selectedStatus: 0,
      // selectedUpcoming: 0,
    };
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((response) => response.json())
      .then((flights) => this.setState({ flights: flights }));
  }

  handleSearchFlights = (e) => {
    this.setState({ searchFlights: e.target.value });
  };

  // handleChangeYear = (e) => {
  //   this.setState({ selectedYear: e.target.value });
  // };
  // handleChangeStatus = (e) => {
  //   this.setState({ selectedStatus: e.target.value });
  // };
  // handleChangeUpcoming = (e) => {
  //   this.setState({ selectedUpcoming: e.target.value });
  // };

  render() {
    // const { flights, selectedYear, selectedStatus, selectedUpcoming } =
    //   this.state;
    // const filteredFlights = flights.filter(
    //   (flight) =>
    //     flight.launch_year > selectedYear ||
    //     flight.launch_status > selectedStatus ||
    //     flight.launch_upcoming > selectedUpcoming
    // );
    const { flights, searchFlights } = this.state;
    const filteredFlights = flights.filter((flight) => {
      if (searchFlights === '') {
        return flight;
      } else if (
        flight.mission_name.toLowerCase().includes(searchFlights.toLowerCase())
      ) {
        return flight;
      } else {
        return 0;
      }
    });

    return (
      <div className='container'>
        <h1 className='head'>SpaceX</h1>
        <div className='row justify-content-center'>
          <input
            className='searchbar'
            type='text'
            placeholder='Search flights...'
            onChange={this.handleSearchFlights}
          />
        </div>
        {/* <div className='row justify-content-center'>
          <div className='col-md-2 col-md-offset-3'>
            <LaunchYearFilter onChange={this.handleChangeYear} />
          </div>
          <div className='col-md-2'>
            <LaunchStatusFilter onChange={this.handleChangeStatus} />
          </div>
          <div className='col-md-2'>
            <UpcomingFilter onChange={this.handleChangeUpcoming} />
          </div>
        </div> */}
        <div className='row'>
          {filteredFlights.map((flight) => (
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
