import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./AddMovie.css";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form className="movie__form" onSubmit={addMovie}>
      <input
        className="movie__input"
        type="text"
        name="name"
        placeholder="Movie name"
        onChange={updateName}
      />

      <input
        className="movie__input"
        type="text"
        name="price"
        placeholder="Movie price"
        onChange={updatePrice}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovie;
