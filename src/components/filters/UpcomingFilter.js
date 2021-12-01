export const UpcomingFilter = () => {
  return (
    <div className='filter-wrapper'>
      <select name='upcoming' className='filter-upcoming'>
        <option value='0'> Is it upcoming? </option>
        <option value='1'> Yes </option>
        <option value='2'> No </option>
      </select>
    </div>
  );
};
