
import './Jokes.css'

import React, { Component, useEffect, useState } from 'react';

const CATEGORIES_API = 'https://api.chucknorris.io/jokes/categories';
const JOKE_API = 'https://api.chucknorris.io/jokes/random?category=';

export default () => {
  const [categories, setCategories] = useState([]);
  const [choosenCategory, setChoosenCategory] = useState('');
  const [joke, setJoke] = useState('');
  const [nextJoke, toggleNextJoke] = useState(true);

  useEffect(() => {
    fetch(CATEGORIES_API)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      })
      .catch((e) => {});
  }, []);

  useEffect(() => {
    fetch(JOKE_API + choosenCategory)
      .then((res) => res.json())
      .then((res) => setJoke(res))
      .catch((e) => {});
  }, [choosenCategory, nextJoke]);

  return (
    <div className="jokes_page">
      <h1>Chuck Norries</h1>
      <div className="box">
        {categories.map((_cat, index) => {
          return (
            <button className = 'button' onClick={() => setChoosenCategory(_cat)}>{_cat}</button>
          );
        })}
      </div>
      <div className="select">
      Selected Catgory: {choosenCategory}</div>
      <div className="box_">
      <p className = 'p'>
      {joke && joke.value}
      </p>
     
      </div>
      <button 
      className="button_"
      onClick={() => toggleNextJoke((st) => !st)}>
      New Joke
      </button>
    </div>
  );
};