import React from 'react'


export default function Search(props) {
    

     const handlePokemonSearch = event => {
        event.preventDefault();

        console.log('id',props.id)
        let id = props.id
        
        const pokeName = event.target.name.value;
        console.log(pokeName)

        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
                if(res.ok){
                    return res.json()
                
                }
            })
            .then(data => {
                props.handleData(data)
                props.handleId(data)
            })
            if(id !== null){
            fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
            .then(res => {
                if(res.ok){
                    return res.json()
                
                }
            })
            .then(data => {
                props.handleTrigger(data)
            })
        }


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
