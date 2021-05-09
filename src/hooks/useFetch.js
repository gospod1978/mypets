import { findAllByDisplayValue } from '@testing-library/dom';
import { useState, useEffect } from 'react'

const useFetch = (url, initialValue) => {
    const [state, setState] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(result => 
                setState(result),
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500)
                
            )
    }, (url));

    return [
        state, 
        isLoading
    ];
};

export default useFetch