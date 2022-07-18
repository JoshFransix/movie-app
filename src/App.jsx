import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import SearchBox from './components/SearchBox'

const App = () => {
  // const [movies, setMovies] = useState([
  //   { "Title": "Star Wars: Episode V", "Year": "1980", "imdbID": "tt08349739", "Type": "Movie", "Poster": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?cs=srgb&dl=pexels-roberto-nickson-3131971.jpg&fm=jpg", "Text": "Star" },
  //   { "Title": "Star Wars II: Episode IV", "Year": "1990", "imdbID": "tt08343456", "Type": "Movie", "Poster": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?cs=srgb&dl=pexels-roberto-nickson-3131971.jpg&fm=jpg", "Text": "StarTrek" },
  //   { "Title": "Star Wars II: Episode IV", "Year": "1990", "imdbID": "tt08343456", "Type": "Movie", "Poster": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?cs=srgb&dl=pexels-roberto-nickson-3131971.jpg&fm=jpg", "Text": "StarTrek" },
  //   { "Title": "Star Wars II: Episode IV", "Year": "1990", "imdbID": "tt08343456", "Type": "Movie", "Poster": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?cs=srgb&dl=pexels-roberto-nickson-3131971.jpg&fm=jpg", "Text": "StarTrek" },
  // ])
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=636b8a0`

    const response = await fetch(url)
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      return '';
    }
  }


  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);




  return (
    <div className="App ">
      <header className=" h-[140px] py-6 text-white bg-[#292929] flex items-center lg:justify-center sm:h-[67px]">
        <div className="px-[5%]  justify-center">
          <a href="#" className=" text-3xl  border border-[#fff] w-max p-2 lg:text-xl">MyTestApp</a>
        </div>
      </header>
      <div id="intro" className="h-[550px]  sm:h-[257px]">
        <div className="px-[5%] w-full h-full flex items-center lg:justify-center">
          <h1 className=" text-7xl  w-[490px] leading-[93.74px] text-[72px] text-white font-bold lg:text-center lg:text-5xl sm:text-2xl">Watch something incredible.</h1>
        </div>
      </div>
      <div className=" px-[5%] pt-16 sm:pt-8">
        <div className="search  flex flex-col">
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      {/* <div className=' flex items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />

      </div> */}
      <div className="moviesContainer container-fluid pt-12 pb-6 pl-[5%] ">
        <h1 className="text-2xl mb-2 md:text-xl sm:text-base">Movies</h1>
        <div className="row pb-2">
          <MovieList movies={movies} />
        </div>
      </div>
      <div className="moviesContainer container-fluid  pl-[5%] ">
        <h1 className="text-2xl mb-2 md:text-xl sm:text-base">Movies</h1>
        <div className="row pb-2">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  )
}

export default App
