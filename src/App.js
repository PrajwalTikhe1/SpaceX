import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { Loader } from './components/utils/Loader';
import { Alerts } from './components/utils/Alerts';
import { flightList } from './redux/flightListSlice';
import { Filters } from './components/Filters';

const App = () => {
  const [searchFlights, setSearchFlights] = useState('');

  const { flights, pending, error } = useSelector((state) => state.flightList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flightList({ flights }));
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
        <Filters />
        {pending ? (
          <Loader />
        ) : error ? (
          <Alerts variant='danger'>{error}</Alerts>
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
