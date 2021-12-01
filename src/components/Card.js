export const Card = ({ flight }) => {
  return (
    <div className='col-sm-4'>
      <div className='card text-center' key={flight.flight_number}>
        <img
          src={flight.links.mission_patch_small}
          className='card-img-top mt-2'
          alt={flight.mission_name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{flight.mission_name} Mission</h5>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <span>
                  <strong>Rocket name </strong> <br />
                  {flight.rocket.rocket_name}
                </span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <span>
                  <strong>Rocket type</strong> <br />
                  {flight.rocket.rocket_type}
                </span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <span>
                  <strong>Launched on</strong> <br />
                  {flight.launch_date_local.substring(0, 10)}
                </span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <span>
                  <strong> Status: </strong>
                  {flight.launch_success === true ? 'Success' : 'Failure'}
                </span>
                <br />
                <span>
                  <strong>Upcoming:</strong>{' '}
                  {flight.upcoming === false ? 'No' : 'Yes'}
                </span>
              </div>
            </div>
          </div>
          <button
            className='btn btn-primary mt-2'
            data-bs-toggle='modal'
            data-bs-target={`#popup${flight.flight_number}`}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
