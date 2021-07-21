import React, { useState,useEffect } from 'react'

function PropStub() {
    const [number, setnumber] = useState(0);  

    function increment() {
        setnumber(number+1);    
    }

    return (
        <div>
            <button onClick={()=>increment()}>Increment </button>
            <br />
            <h2>{number}</h2>
            <PropTest number={number}/>      
        </div>
    );
}

function PropTest(props) {
    const [num, setnum] = useState(props.number)

    useEffect(() => {
        setnum(props.number)
    }, [props])

    return (
        <div>
            <h2>{num}</h2>
        </div>
    )
}

export default PropStub;
