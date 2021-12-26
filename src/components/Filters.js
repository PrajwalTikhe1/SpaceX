export const Filters = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-2 col-md-offset-3'>
          <div className='filter-wrapper'>
            <select className='filter-launchyear'>
              <option> Launch Year </option>
              <option value='first'> 2001-2005 </option>
              <option value='second'> 2006-2010 </option>
              <option value='third'> 2011-2015 </option>
              <option value='fourth'> 2016-2020 </option>
            </select>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='filter-wrapper'>
            <select className='filter-launchstatus'>
              <option> Launch Status </option>
              <option value='success'> Success </option>
              <option value='failure'> Failure </option>
            </select>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='filter-wrapper'>
            <select className='filter-upcoming'>
              <option> Is it upcoming? </option>
              <option value='yes'> Yes </option>
              <option value='no'> No </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
