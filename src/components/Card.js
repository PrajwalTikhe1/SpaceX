export const Card = ({ flight }) => {
  return (
    <div className='col-sm-4'>
      <div className='card text-center' key={flight.flight_number}>
        <img
          src={flight.links.mission_patch_small}
          className='card-img-top'
          alt={flight.mission_name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{flight.mission_name} Mission</h5>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <span className='fw-bold'>Rocket name </span> <br />
                <span>{flight.rocket.rocket_name} </span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <span className='fw-bold'>Rocket type</span> <br />
                <span>{flight.rocket.rocket_type}</span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <span className='fw-bold'>Launched on</span> <br />
                <span>{flight.launch_date_local.substring(0, 10)}</span>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <span>
                  <span className='fw-bold'> Status: </span>
                  {flight.launch_success === true ? 'Success' : 'Failure'}
                </span>
                <br />
                <span>
                  <span className='fw-bold'> Upcoming:</span>{' '}
                  {flight.upcoming === false ? 'No' : 'Yes'}
                </span>
              </div>
            </div>
          </div>
          <a
            href='#'
            className='btn btn-primary mt-2'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
