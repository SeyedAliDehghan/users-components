import React from 'react'
import './Form.css'
import Button from '../Button/Button'

const uniqIdGenerate=()=>{
    return parseInt(Math.random()*10000);
  }

export default function Form({users,setUsers,controlledUser, setControlledUser,setController}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        if(controlledUser.id){
          setUsers(users.map(user=>user.id===controlledUser.id?user=controlledUser:user))
          setControlledUser({firstName:"",lastName:"",job:""})
        }else{
          setUsers([...users, { id: uniqIdGenerate(), ...controlledUser }]);
          setControlledUser({firstName:"",lastName:"",job:""})
        }
        setController(false)
      }

      const handleChange=(event)=>{
        const {name,value}=event.target
        setControlledUser({...controlledUser,[name]:event.target.value})
      }

    return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
           <div className="topForm">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input id={"firstName"} type="text" name={"firstName"} value={controlledUser.firstName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id={"lastName"} type="text" name={"lastName"} value={controlledUser.lastName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="job">Job:</label>
                    <input id={"job"} type="text" name={"job"} value={controlledUser.job} onChange={handleChange}/>
                </div>
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
             <Button type={'submit'} customCss={'submitBtn'}>Submit</Button>
               {/* <input className="submitBtn" type="submit" /> */}
            </div>
        </form>
    </div>
    )
}
