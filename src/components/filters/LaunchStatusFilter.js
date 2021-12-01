export const LaunchStatusFilter = () => {
  return (
    <div className='filter-wrapper'>
      <select name='launchstatus' className='filter-launchstatus'>
        <option value='0'> Launch Status </option>
        <option value='1'> Success </option>
        <option value='2'> Failure </option>
      </select>
    </div>
  );
};
