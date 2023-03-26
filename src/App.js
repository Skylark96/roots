import './App.css';
import { useState } from 'react';
import {moviesData} from './Data';
import MovieList from './Components/MovieList';


function App() {

  const [list, setList] =useState(moviesData)

  return (
    <div className="main">

      <MovieList data={list}/>
    </div>
  );
}

export default App;
