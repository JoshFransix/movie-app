const SearchBox = (props) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="search">Search</label>
      <input
        name="search"
        className="border border-[#000] p-2 mt-2 "
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}

      ></input>
    </div>
  );
};

export default SearchBox;