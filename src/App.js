import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Filters } from './components/Filters';
import { Flights } from './components/Flights';
import { flightList } from './redux/flightListSlice';
import { Loader } from './components/utils/Loader';
import { Alerts } from './components/utils/Alerts';

const App = () => {
  const [searchFlights, setSearchFlights] = useState('');

  const { flights, pending, error } = useSelector((state) => state.flightList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flightList());
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
          <Flights filteredFlights={filteredFlights} />
        )}
      </div>
    </>
  );
};

export default App;
