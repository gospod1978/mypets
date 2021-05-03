import React, { Component } from 'react'

const options = [
    {label:'IT', value:'it'},
    {label:'HR', value:'hr'},
    {label:'CV', value:'cv'},
    {label:'RM', value:'rm'},
]
class DemoPage2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Pesho',
            age: 18,
            bio: 'Lorem ipsum',
            occupation: 'rm',
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        // this.emailInput = React.createRef()
    }
    componentDidMount() {
        console.log(this.state)
    }
    onSubmitHandler(e)  {
        e.preventDefault()
        // const {username, age} = this.state;
        console.log(this.state)
        console.log(this.emailInput.current)
    }
    //generic onChange method
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.username)
    }
    render() {
        return (
            <div className="site-content">
                <section>
                    <h1>Demo Form</h1>

                    <form onSubmit={this.onSubmitHandler}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Pesho" name="username" value={this.state.username} onChange={this.onChangeHandler} />
                        <br />
                        {/* <label htmlFor="email">Email</label> */}
                        {/* <input ref={this.emailInput} type="email" id="email" name="email" placeholder="example@gmsil.com"/> */}
                        <br />
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" value={this.state.age} name="age" onChange={this.onChangeHandler}/>
                        <br />
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" onChange={this.onChangeHandler} value={this.state.bio} />
                        <br />
                        <label htmlFor="occupation"></label>
                        <select name="occupation" id="occupation" onChange={this.onChangeHandler} value={this.state.occupation}>
                            {options.map(x => 
                                <option key={x.value} value={x.value}>{x.label}</option>
                                )}
                        </select>
                        <br />
                        <input type="submit" value="Send" />
                        <br />
                    </form>
                </section>
            </div>
        )
    }
}

export default DemoPage2
