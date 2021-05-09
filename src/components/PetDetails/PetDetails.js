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

    const onPetButtonHandler = () => {
        let incrementedLikes = Number(pet.likes) + 1
        petService.pet(match.params.petId, incrementedLikes)
            .then(() => {
                setPet(state => ({...state, likes: incrementedLikes}))
            })
    }

    return (
        <section className="detailsOtherPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: {pet.likes}
            <button className="button" onClick={onPetButtonHandler}>
                <i className="fas fa-heart"></i>Pet
            </button>
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