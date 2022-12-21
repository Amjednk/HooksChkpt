import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import AddItem from './Components/AddItem';
import FilterSearch from './Components/FilterSearch';

/*main App*/
function App() {
/*Movies data details since no data base*/
  const data = [
    { title:'Emancipation', description:"A runaway slave forges through the swamps of Louisiana on a tortuous journey to escape plantation owners that nearly killed him.", 
    posterURL:'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230282/emancipation-posterart.jpg', 
    rating: 6 },
    { title:'Avatar: The Way of Water', description:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.", 
    posterURL:'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg', 
    rating: 8 },
    { title:'Bullet Train', description:"Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.", 
    posterURL:'https://media-cache.cinematerial.com/p/500x/cps6tbui/bullet-train-movie-poster.jpg?v=1654096192', 
    rating: 7 }, 
  ];

  const [newData, setNewData] = useState(data); //New movie data 
  const addMovie = (newMovie) => {setNewData([...newData, newMovie])}; // Add movie 
  const [titleSearch, setTitleSearch] = useState(""); //searching by title
  const [ratingSearch, setRatingSearch] = useState(0); //seatchinf by rate
  
  return (
    <div className="App">
      {/*Filtering and comparing data for movie search into the movies list*/}
      <FilterSearch defaultRate={ratingSearch} getSearch={setTitleSearch} getRate={setRatingSearch}/>
      <AddItem addMovie={addMovie} />
      <div>
        {/*Inserating Movies into the cards list*/}
        <MovieList data ={newData.filter(
        (el) => el.title.trim().toLowerCase().includes(titleSearch) && el.rating >= ratingSearch)} />
      </div>
    </div>
  );
}

export default App;
