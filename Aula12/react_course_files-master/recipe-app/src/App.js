import React, { useState, useEffect } from 'react';
import Recipe from './components/recipe/Recipe'
import SearchBox from './components/search-box/SearchBox'
import SearchFilter from './components/search-filter/SearchFilter'
import './App.css';

function App() {

  const [query, setQuery] = useState("")
  const [searchQueryTemp, setSearchQueryTemp] = useState("")
  const [recipes, setRecipes] = useState([])
  
  const APP_ID = "13823779"
  const APP_KEY = "5f10d3f8439c28de326a0de74774437b"
  const API_URI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {

    if (query.length > 0) {
      fetch(API_URI).then(response => response.json().then(data => {
        setRecipes(data.hits)
        console.log(data)
       }))
    }else {
      setRecipes([])
    }
  }, [query])

  const updateSearchQueryTemp = (event) => {
    setSearchQueryTemp(event.target.value)
    console.log(searchQueryTemp)
  }

  const submitForm = event => {
    event.preventDefault()
    setQuery(searchQueryTemp)
  }

  const filterLogic = event => {
    event.target.classList.toggle('active-filter')
    const li = event.target
    if (li.classList.contains('active-filter')){
      setQuery(li.innerText)
    } else {
      setQuery('')
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Strange Recipes Finder</h1>
        <form onSubmit={submitForm} className="search-form">
          <SearchBox updateFunction={updateSearchQueryTemp} placeholder="Search Query" />
        </form>
        <div className="search-filter">
          <SearchFilter filterLogic={filterLogic} />
        </div>
      </header>
       <div className="recipes">
         {
           recipes.map( (recipe, index) => (
            <Recipe 
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}/>
           ))
         }
       </div>
    </div>
  );
}

export default App;
