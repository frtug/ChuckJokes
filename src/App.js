import React,{useState,useEffect} from 'react'
import './App.css';
import JokeCategory from './Components/JokeCategory';
import JokeDetail from './Components/JokeDetail';
import axios from 'axios'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  const [categories,setCategories] = useState([])
  const [detail,setDetail] = useState([])
  const [update,setUpdate] = useState("")

   useEffect(() =>{
    axios('https://api.chucknorris.io/jokes/categories')
    .then(res =>{
      setCategories(res.data);
    })
    const value = update
    axios(`https://api.chucknorris.io/jokes/random?category?${value}`)
      .then(res =>{
        setDetail(res.data.value);
        
        })

  },[update]);

  const Joke = ({match}) =>{

      setUpdate(match.params.categoryid)
      return(
        <JokeDetail category = {update} detail = {detail} />
      )
    }
  
  return (
    
    <BrowserRouter>
    <div className="App">
    <JokeCategory  categories = {categories} />

        <Switch>
            <Route path="/:categoryid" component={Joke} />
        </Switch>


    </div>
    </BrowserRouter>
  );
}

export default App;
