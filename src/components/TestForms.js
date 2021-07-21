import React,{useState} from 'react'
import InputField from './global_ui/input/input'


function TestForms() {
    const [data, setData] = useState({
        id:'',
        password:'',
      })
    
    
      const [idError, setidError] = useState(null);
      const [passwordError, setpasswordError] = useState(null);
    
      const validateID=(id)=>{
        if(id.length<5){
          setidError("ID wrong")
        }
        else{
          setidError(null)    
        }
        setData({...data,id:id})
      }
    
      const validatePassword=(pw)=>{
        if(pw.length<5){
          setpasswordError("PW wrong")
        }   
        else{
          setpasswordError(null)
        } 
        setData({...data,password:pw})
      }
    
      const submit=()=>{
        const d=data;
        validateID(d.id);   
        validatePassword(d.password);    
      }
    return (
       
        <div className="App">
            <p>1 :{data.id}</p>
            <p>2 :{data.password}</p>
            <p>3 :{idError}</p>
            <p>4 :{passwordError}</p>

            <InputField
            type="text"
            value={data.id}
            placeholder="ID"
            error={idError}
            onChange={(e)=>validateID(e.target.value)}
            />

            <p style={{height:'30px'}}></p>

            <InputField
            type="text"
            value={data.password}
            placeholder="Password"
            error={passwordError}
            onChange={(e)=>validatePassword(e.target.value)}
            />

            <button onClick={()=>submit()}>Submit</button>            
        </div>
    )
}

export default TestForms
