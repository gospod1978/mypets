import { useState, useEffect } from 'react'
import * as petService from '../../services/petService'

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({})

    useEffect(() => {
        petService.getOne(match.params.petId)
                  .then(res => setPet(res))
    }, [match])
    return (
        <section class="detailsOtherPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                    Pet</button></a>
        </p>
        <p class="img"><img src={pet.imageURL} /></p>
        <p class="description">{pet.description}</p>
    </section>
    )
}

export default PetDetails