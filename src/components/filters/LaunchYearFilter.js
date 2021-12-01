export const LaunchYearFilter = ({ onChange }) => {
  return (
    <div className='filter-wrapper'>
      <select
        name='launchyear'
        className='filter-launchyear'
        onChange={onChange}
      >
        <option value='0'> Launch Year </option>
        <option value='1'> 2000-2005 </option>
        <option value='2'> 2006-2010 </option>
        <option value='3'> 2011-2015 </option>
        <option value='4'> 2016-2020 </option>
      </select>
    </div>
  );
};
