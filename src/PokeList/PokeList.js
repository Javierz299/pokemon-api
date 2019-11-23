import React from 'react'
import PokeCard from '../PokeCard/PokeCard'

export default function PokeList(props){
    const obj = props.list.sprites
   console.log(obj)
    
        let normal = "";
        let shiny = ""

        for(let key in obj){
            // console.log(obj[key])
            if(key === "front_default"){
                normal = `${obj[key]}`
            }
            if(key === "front_shiny"){
                shiny = `${obj[key]}`
            }
        }
    console.log(normal)
    console.log(shiny)
      return (
        <div>
            
            <PokeCard front={normal} shiny={shiny} />
            
        </div>

      )
      
      }