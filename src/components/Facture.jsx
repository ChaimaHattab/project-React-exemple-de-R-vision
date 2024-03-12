import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';

const Facture = () => {
    const [fact,setFact]=useState(
        {
            "numfact":100,
            "datefact":"06/03/2024",
            "mtfact":2000
        }
    )
    const handleChange=()=>{
  setFact({...fact,mtfact:3000})
    }
  return (
    <div>
      <div className='im'>
        Facture Numéro : {fact.numfact}
        Date Facture : {fact.datefact}
        Montant Facture : {fact.mtfact}
      </div>
      <Button variant="success" onClick={()=>handleChange()}>Modifier</Button>
    </div>
  )
}

export default Facture
