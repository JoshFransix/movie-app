const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => <div class="relative flex justify-start mr-3 w-[300px] h-[300px]" >
        <h1 className="mx-auto absolute cardName top-0 left-0 h-full w-[300px] text-white  rounded-md flex justify-center items-center text-center">{movie.Title}</h1>
        <img src={movie.Poster} alt="movie" className=" rounded-md w-[300px] h-full" />
        {/* <div
          onClick={() => props.handleFavouritesClick(movie)}
          className='overlay d-flex align-items-center justify-content-center'
        >
        </div> */}
      </div >)}
    </>
  )
}

export default MovieList;