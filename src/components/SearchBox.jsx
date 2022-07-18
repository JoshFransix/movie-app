const SearchBox = (props) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="search">Search</label>
      <input
        name="search"
        className=" border-[#000] border-[1.2px] rounded-sm p-2 mt-2 "
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}

      ></input>
    </div>
  );
};

export default SearchBox;