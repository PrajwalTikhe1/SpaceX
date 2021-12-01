export const UpcomingFilter = ({ onChange }) => {
  return (
    <div className='filter-wrapper'>
      <select name='upcoming' className='filter-upcoming' onChange={onChange}>
        <option value='0'> Is it upcoming? </option>
        <option value='1'> Yes </option>
        <option value='2'> No </option>
      </select>
    </div>
  );
};
