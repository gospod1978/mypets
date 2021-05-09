import { useState, useEffect } from 'react'
import * as petService from '../../services/petService'

import InputError from '../Shared/InputError/InputError'

const EditPetDetails = ({
    match, 
    history
}) => {
    let [pet, setPet] = useState({})
    let [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        petService.getOne(match.params.petId)
                  .then(res => setPet(res))
    }, [match])

    const onDescrpitionSaveSubmit = (e) => {
        e.preventDefault()
        let updatePet = {...pet, description: e.target.description.value}
        petService.update(match.params.petId, updatePet)
                  .then(() => {
                      setTimeout(() => {
                          history.push(`/pets/details/${match.params.petId}`)
                          return
                      }, 1000)
                  })
    }

    const onDescriptionChangeHandler = (e) => {
        // i can in onBlur or onChange
        console.log(e.target.value)
        if (e.target.value.length < 10) {
            setErrorMessage('Description to short')
        } else {
            setErrorMessage('')
        }
    }

    return (
    <section className="detailsMyPet">
        <h3>{pet.name}</h3>
        <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
        <p className="img"><img src={pet.imageURL} alt="img"/></p>
        <form onSubmit={onDescrpitionSaveSubmit}>
            <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
            <InputError>{errorMessage}</InputError>
            <button className="button"> Save</button>
        </form>
    </section>
    )
}

export default EditPetDetails