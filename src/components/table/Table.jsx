import React from "react";
import "./Table.css";
import Button from '../Button/Button'
import Tbody from "../tbody/Tbody";
export default function Table({users,setUsers,setControlledUser,setController}) {

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
  
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <Tbody users={users} setUsers={setUsers} setControlledUser={setControlledUser} handleDeleteUser={handleDeleteUser}></Tbody> */}
        {/* With Tbody component */}
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.job}</td>
              <td>
                {/* <button onClick={()=> setControlledUser(item)}>Update</button>
                <button onClick={() => handleDeleteUser(item.id)}>
                  Delete
                </button> */}
                <Button customCss={"updateDeleteButton"} onClick={()=>{setControlledUser(item);setController(true)}}>Update</Button>
                <Button customCss={"updateDeleteButton"} onClick={() => {handleDeleteUser(item.id)}}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Button customCss={"submitBtn"} onClick={() =>{setController(true)}}>Add New</Button>
        </div>
      <div>
        
      </div>
    </div>
  );
}
