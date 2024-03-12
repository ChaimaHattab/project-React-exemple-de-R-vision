import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Livres = () => {
    const [livres,setlivres]=useState([
        //1ére objet
        {
            isbn: "42368756",
            titre: "ReactJS",
            auteur:"Romain Rissouan",
            annedition: 2021,
            prix: 33,
            couverture :"https://m.media-amazon.com/images/I/61vg+0-1yGL._SY466_.jpg",
        },
        //le 2éme objet
            {
            isbn: "123698745",
            titre: "Les VPNS",
            auteur:"Stephan@gmail.com",
            annedition: 2020,
            prix: 55,
            couverture:
            "http://res.cloudinary.com/isetsfax/image/upload/v1696761358/images/9782100491155_internet_w290.jpg.jpg",
        },
        //le 3éme objet
            {
            isbn: "54894",
            titre: "Techniques de Référencement Web",
            auteur:"Patrick Wampe",
            annedition: 2020,
            prix: 55,
            couverture: "https://blog.internet-formation.fr/wpcontent/uploads/2018/04/1e-4e-couverture-livre-SEO.jpg",
            },
            //le 4éme objet
            {
            isbn: "5464sf",
            titre: "VueJS",
            auteur:"Alexandra Martin",
            annedition: 2020,
            prix: 20,
            couverture: "https://m.media-amazon.com/images/I/718QqTspltL._SY466_.jpg",
        },
        //le 5éme objet
            {
            isbn: "65465445",
            titre: "Laravel",
            auteur:"Eric Sarrion",
            annedition: 2020,
            prix: 50,
            couverture:
            "https://images.booksense.com/images/132/218/9798554218132.jpg",
        }
            ])
            //Ajouter un nouveau livre
            const[newlivre,setNewlivre]=useState({
                isbn: "50000",
                titre: "Développement Web",
                auteur:"ESPS",
                annedition: 2024,
                prix: 75,
                couverture: "https://blog.internet-formation.fr/wpcontent/uploads/2018/04/1e-4e-couverture-livre-SEO.jpg",  
            })
            //méthode handleAdd() du bouton Ajouter
            const handleAdd = () =>{
                setlivres([newlivre,...livres])
            }
            //méthode handleDelete() du bouton Supprimer
            const handleDelete=(isbn)=>{
                const newtablivre=livres.filter((item)=>
                    item.isbn!=isbn
                )
                    setlivres(newtablivre)
            }

            
    
  return (
    <div>
        <Button variant="outline-info" onClick={()=>handleAdd()}>Ajouter</Button>
        <h3><center>Liste des Livres</center></h3>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
            <th>ISBN</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Année Edition</th>
            <th>Prix</th>
            <th>Couverture</th>
            <th>Modifier</th>
            <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            {
                livres.map((liv,index)=>
                <tr key = {index}>
                    <td>{liv.isbn}</td>
                    <td>{liv.titre}</td>
                    <td>{liv.auteur}</td>
                    <td>{liv.annedition}</td>
                    <td>{liv.prix}</td>
                    <td><img src={liv.couverture} width={80} height={80}/></td>
                    <td><Button variant="outline-danger">Modifier</Button></td>
                    <td><Button variant="outline-warning" onClick={()=>handleDelete(liv.isbn)}>Supprimer</Button></td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Livres
