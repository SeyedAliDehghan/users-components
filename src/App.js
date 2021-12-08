import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Table from './components/table/Table';
import Form from './components/Form/Form';
const usersList = [
  { id: 1, firstName: "mamad", lastName: "mamadiani", job: "developer" },
  { id: 2, firstName: "hashem", lastName: "babazade", job: "developer" },
];

function App() {
const [users, setUsers] = useState(usersList);
const [controlledUser, setControlledUser] = useState({firstName: "",lastName: "",job: ""});
const [controller, setController]=useState(false);


  return (
    <div className="App">
      <Table users={users} setUsers={setUsers} setControlledUser={setControlledUser} setController={setController}/>
      {controller && <Form setController={setController} users={users} setUsers={setUsers} controlledUser={controlledUser} setControlledUser={setControlledUser}/>}
      {/* <Form users={users} setUsers={setUsers} controlledUser={controlledUser} setControlledUser={setControlledUser}/> */}

    </div>
  );
}

export default App;
