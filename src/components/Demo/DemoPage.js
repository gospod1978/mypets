const DemoPage = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.age.value)
    }
    // const onSubmitClickHandler = (e) => {
    //     console.log(e.target.parentNode.username.value)
    //     console.log(e.target.parentNode.age.value)
    // }
    const onUsernameChangeHandler = (e) => {
        e.preventDefault()

        console.log(e.target.value)
    }
    return (
        <div className="site-content">
            <section>
            <h1>Demo Form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={onUsernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
                <br/>
                <input type="submit" value="Send" />
                <br />
                {/* <button type="button" onClick={onSubmitClickHandler}>Click me!</button> */}
            </form>
            </section>
        </div>
    )
}

export default DemoPage