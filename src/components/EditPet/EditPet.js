import PetFormView from '../PetFormView/PetFormView'
import { useState, useEffect } from 'react'

import * as petService from '../../services/petService'


const EditPet = ({
    match, 
    history
}) => {
    let [pet, setPet] = useState({})

    useEffect(() => {
        petService.getOne(match.params.petId)
                  .then(res => setPet(res))
    }, [match])
    const onEditSubmitHandler = (e) => {
        e.preventDefault()
        const petNew = {
            name: e.target.name.value,
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value,
            likes: pet.likes
        }
        petService.update(match.params.petId, petNew)
                  .then(() => {
                      setTimeout(() => {
                          history.push(`/pets/details/${match.params.petId}`)
                          return
                      }, 1000)
                  })
    }

    return (
        <PetFormView 
        onSubmitHandler={onEditSubmitHandler}
        name={pet.name}
        description={pet.description}
        imageURL={pet.imageURL}
        category={pet.category}
        title='Edit Pet'
        />
    )
}

export default EditPet