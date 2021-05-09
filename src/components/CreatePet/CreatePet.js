import * as petsService from '../../services/petService'

const CreatePet = ({
    history
}) => {
    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let description = e.target.description.value
        let imageURL = e.target.imageURL.value
        let category = e.target.category.value
        petsService.create(name, description, imageURL, category)
            .then(() => {
                setTimeout(() => {
                    history.push('/')
                }, 1000)
            })
    }
    return (
        <section className="create">
            <form onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input type="submit" className="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    )
}

export default CreatePet