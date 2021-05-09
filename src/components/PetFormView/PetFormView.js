const PetFormView = ({
    onSubmitHandler, 
    name,
    description,
    imageURL,
    category, 
    title
}) => {
   
    return (
        <section className="create">
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>{title}</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={name} placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" defaultValue={description} id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        {imageURL ? <p className="img" style={{marginBottom: -60}}><img src={imageURL} alt="pic"/></p> : ''}
                        <span className="input">
                            <input type="text" name="imageURL" defaultValue={imageURL} id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" defaultValue={category} name="category">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input type="submit" className="submit" value={title}/>
                </fieldset>
            </form>
        </section>
    )
}

export default PetFormView