import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search'
import PokeList from './PokeList/PokeList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        pokemon: [],
        evoTrigger: [],
        id: null,
    }
}

handleData = data => {
  // console.log('data',data.id)
  this.setState({
    pokemon: data,
  })
}

handleTrigger = evo =>{
  this.setState({
    evoTrigger: evo,
  })
  console.log(this.state.evoTrigger)
}

handleId = data => {
  console.log('dataID',data.id)
  this.setState({
    id: data.id
  })
  console.log('state',this.state.id)
}

  render(){
  return (
    <div className="App">
      <header>Pokemon API</header>
      <Search handleData={this.handleData} handleTrigger={this.handleTrigger} handleId={this.handleId} id={this.state.id}/>
      <PokeList list={this.state.pokemon}/>
    </div>
  );
}
}

export default App;
