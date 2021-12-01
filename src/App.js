import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { listFlights } from './actions/FlightActions';
import { LaunchYearFilter } from './components/filters/LaunchYearFilter';
import { LaunchStatusFilter } from './components/filters/LaunchStatusFilter';
import { UpcomingFilter } from './components/filters/UpcomingFilter';

const App = () => {
  const [searchFlights, setSearchFlights] = useState('');

  const dispatch = useDispatch();

  const flightList = useSelector((state) => state.flightList);
  const { loading, error, flights } = flightList;

  useEffect(() => {
    dispatch(listFlights());
  }, [dispatch]);

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
    <>
      <div className='container'>
        <h1 className='head'>SpaceX</h1>
        <div className='row justify-content-center'>
          <input
            className='searchbar'
            type='text'
            placeholder='Search flight missions...'
            onChange={(e) => {
              setSearchFlights(e.target.value);
            }}
          />
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-2 col-md-offset-3'>
            <LaunchYearFilter />
          </div>
          <div className='col-md-2'>
            <LaunchStatusFilter />
          </div>
          <div className='col-md-2'>
            <UpcomingFilter />
          </div>
        </div>
        {loading ? (
          <span>Loading</span>
        ) : error ? (
          <span>Error</span>
        ) : (
          <div className='row'>
            {filteredFlights.map((flight) => (
              <Fragment>
                <Card flight={flight} />
                <Modal flight={flight} />
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
