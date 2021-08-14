import React, { useState,useEffect } from 'react'

function PropStub() {
    const [abc, setabc] = useState(0);
    const [number, setnumber] = useState([
        {
            name:'Ney',
            jersey:11
        },
        {
            name:'Busi',
            jersey:5
        },        
        {
            name:'Messi',
            jersey:10
        },
        {
            name:'Ronnie',
            jersey:7
        },
        {
            name:'KDB',
            jersey:17
        },
    ]);  

    function sortJersey(a,b) {
        return a.jersey-b.jersey;        
    }

    function sortObj() {
        setabc(abc+1);

        let b=number;
        
        b.sort(sortJersey)
        console.log(10,number);
        setnumber(b);   
    }

    return (
        <div >
            <button onClick={()=>sortObj()}>Increment </button>
            {abc}
            <br />            
            {
                number.map((e)=>{
                   return  <PropTest key={e.jersey} number={e}/> 
                })
            }                 
        </div>
    );
}

function PropTest(props) {
    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/distancematrix/json?origins=17.395007,78.510930&destinations=side_of_road:17.4135,78.5287&key=AIzaSyAgP6rjcTRM4-fVcxfGdgCGaaU6fW7f5xQ')
        .then((e)=>{
            console.log(e);
        })
    
        
    }, [])
    return (
        <div style={{background:'grey'}}>
            <h2>
            { props.number.name }
            </h2>
            <h2>
            { props.number.jersey }
            </h2>
        </div>
    )
}

export default PropStub;
