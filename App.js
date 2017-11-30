import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '/components/BusinessList/BusinessList.js';
import SearchList from '/components/SearchList/SearchList.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  SearchBar()
  BusinessList()
</div>);
  }
}
