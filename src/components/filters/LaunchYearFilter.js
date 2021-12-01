export const LaunchYearFilter = () => {
  return (
    <div className='filter-wrapper'>
      <select name='launchyear' className='filter-launchyear'>
        <option value='0'> Launch Year </option>
        <option value='1'> 2001-2005 </option>
        <option value='2'> 2006-2010 </option>
        <option value='3'> 2011-2015 </option>
        <option value='4'> 2016-2020 </option>
      </select>
    </div>
  );
};
