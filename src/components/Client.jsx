import React, { useState } from 'react'
import "./style.css"

const Client = () => {
    const[nom,setNom]=useState("ESPS")
    const[ville,setVille]=useState("Sfax")
    const[adresse,setAdresse]=useState("Route Elain")
    const modifier=()=>{
        setNom("Université")
        setVille("Sousse")
        setAdresse("Mseken")
    }
  return (
    <div>
      <h1>Nom est {nom}</h1>
      <h1>Ville est {ville}</h1>
      <h1>Adresse est {adresse}</h1>
      <button onClick={()=>modifier()}>Modifier</button>

    </div>
  )
}

export default Client
