import React from 'react'

export default function PokeCard(props){
    
        return (
            <>
                <img src={props.front} alt="default" />
                <img src={props.shiny} alt="shiny"/>
            </>
        )
    }



