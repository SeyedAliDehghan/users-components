import React from 'react'
import Button from '../Button/Button'
function Tbody({users,setUsers,setControlledUser,handleDeleteUser}) {
    return (
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
                <Button customCss={"updateDeleteButton"} onClick={()=> setControlledUser(item)}>Update</Button>
                <Button customCss={"updateDeleteButton"} onClick={() => handleDeleteUser(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
    )
}

export default Tbody
