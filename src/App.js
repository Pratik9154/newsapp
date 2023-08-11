
import './App.css';
import React, { Component } from 'react'
import NewsBox  from './components/NewsBox';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  state={
    progress : 0
  }
  ProgressL =(value)=>{
    this.setState({
      progress : value
    })
  }

  apikey = process.env.REACT_APP_NEWS_API
  render() {
 
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>
        <Routes>
        <Route exact path='/'  element={<NewsBox  ProgressL={this.ProgressL} key="genral" pgno={6} country={"us"} apikey={this.apikey} category={""}/>}/>
        <Route exact path='/sports' element={<NewsBox  ProgressL={this.ProgressL} key="sports" pgno={6} country={"us"} apikey={this.apikey} category={"sports"}/>}/>
        <Route exact path='/entertainment' element={<NewsBox  ProgressL={this.ProgressL} key="entertainment" pgno={6} country={"us"} apikey={this.apikey} category={"entertainment"}/>}/>
        <Route exact path='/science' element={<NewsBox  ProgressL={this.ProgressL} key="science" pgno={6} country={"us"} apikey={this.apikey} category={"science"}/>}/>
        <Route exact path='/business' element={<NewsBox  ProgressL={this.ProgressL} key="business" pgno={6} country={"us"} apikey={this.apikey} category={"business"}/>}/>
        <Route exact path='/technology' element={<NewsBox  ProgressL={this.ProgressL} key="technology" pgno={6} country={"us"} apikey={this.apikey} category={"technology"}/>}/>
        <Route exact path='/health' element={<NewsBox  ProgressL={this.ProgressL} key="health" pgno={6} country={"us"} apikey={this.apikey} category={"health"}/>}/>

        </Routes>
        </BrowserRouter>
        </div>
      
    )
  }
}
// business
// entertainment
// general
// health
// science
// sports
// technology
