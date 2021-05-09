import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Demo = () => {

    // const [state, setState] = useState({
    //     count: 0,
    //     step: 1
    // })

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    // const [, setStep] = useState(1) the same
    // const [character, setCharacter] = useState({})
    const [character, isCharacterIsLoading] = useFetch(`https://swapi.dev/api/people/${step}`)

    // useEffect(() => {
    //     ako izpolzvam normalno fecth
    //     fetch(`https://swapi.dev/api/people/${step}`)
    //         .then(res => res.json())
    //         .then(character => setCharacter(character))
    //         unMount s return funkcia
           
    //         return () => {
    //             console.log('component Will Unmount')
    //         }

    // }, [step])
    //ako e [] izpalnqva didMount, ako ima neshto v masiva kato step se pravi didUpdate
    const onCounterButtonClickHandler = () => {
        // setState(oldState => ({...oldState, count: oldState.count + 1}))
        setCount(oldState => oldState + 1)
        console.log(character)
    }
    const onCounterButtonMinusClickHandler = () => {
        setCount(oldState => oldState - 1)
        // setState(oldState => ({...oldState, count: oldState.count - 1}))
    }
    const onStepSelectChangeHandler = (e) => {
        const stepValue = Number(e.target.value)
        setStep(stepValue)
        // setState(oldState => ({...oldState, step: stepValue}))
        console.log(stepValue)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Counter</h1>
            <h1>{isCharacterIsLoading ? 'Loading...' : `${character?.name}`}</h1>

            {/* <div>{state.count}</div> */}
            <div>{count}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button className="button" style={{ margin: 20 }} onClick={onCounterButtonClickHandler}>Add</button>
                <button className="button" style={{ margin: 20 }} onClick={onCounterButtonMinusClickHandler}>Minus</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding:10 }}>
                <label style={{width:50, margin:10}} htmlFor="step">Step</label>
                <select style={{width:50, margin:10}} onChange={onStepSelectChangeHandler} name="step" id="step">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <Link style={{margin:10}} to='/' className="button">Click</Link>
        </div>
    )
}

export default Demo
