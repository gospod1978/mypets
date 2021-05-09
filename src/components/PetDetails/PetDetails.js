import { useState, useEffect } from 'react'
import * as petService from '../../services/petService'
import { Link } from 'react-router-dom'

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({})

    useEffect(() => {
        petService.getOne(match.params.petId)
                  .then(res => setPet(res))
    }, [match])
    return (
        <section className="detailsOtherPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: {pet.likes} <a href="/"><button className="button"><i className="fas fa-heart"></i>
                    Pet</button></a>
        </p>
        <p className="img"><img src={pet.imageURL} alt="pic"/></p>
        <p className="description">{pet.description}</p>
        <div className="pet-info">
            <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
            <Link to="#"><button className="button">Delete</button></Link>
        </div>
    </section>
    )
}

export default PetDetails