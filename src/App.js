import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search'
import PokeList from './PokeList/PokeList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        pokemon: []
    }
}

handleData = data => {
  this.setState({
    pokemon: data,
  })
  console.log(this.state.pokemon)
}

  render(){
  return (
    <div className="App">
      <header>Pokemon API</header>
      <Search handleData={this.handleData}/>
    {this.state.pokemon && <PokeList list={this.state.pokemon}/>}
    </div>
  );
}
}

export default App;
