import React from 'react'


export default function Search(props) {
    

     const handlePokemonSearch = event => {
        event.preventDefault();
        
        const pokeName = event.target.name.value;
        console.log(pokeName)

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => res.json())
            .then(data => {
                props.handleData(data)
            })


    }
        return (
            <div>
            <form onSubmit={handlePokemonSearch}>
                <fieldset>
                    <legend>pokemon search</legend>
                    <label htmlFor="name">Search by name</label>
                    <input id="name" name="name" type="search" placeholder="oddish"></input>
                    <button>Enter</button>
                </fieldset>
            </form>
            </div>
            
        )
    }
