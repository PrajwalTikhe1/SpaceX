export const Filters = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-2 col-md-offset-3'>
          <div className='filter-wrapper'>
            <select name='launchyear' className='filter-launchyear'>
              <option value='0'> Launch Year </option>
              <option value='1'> 2001-2005 </option>
              <option value='2'> 2006-2010 </option>
              <option value='3'> 2011-2015 </option>
              <option value='4'> 2016-2020 </option>
            </select>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='filter-wrapper'>
            <select name='launchstatus' className='filter-launchstatus'>
              <option value='0'> Launch Status </option>
              <option value='1'> Success </option>
              <option value='2'> Failure </option>
            </select>
          </div>
        </div>
        <div className='col-md-2'>
          <select name='upcoming' className='filter-upcoming'>
            <option value='0'> Is it upcoming? </option>
            <option value='1'> Yes </option>
            <option value='2'> No </option>
          </select>
        </div>
      </div>
    </>
  );
};
