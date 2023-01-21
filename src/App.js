import React from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { useState } from 'react';


function App() {

  const [usersList, setUsersList] = useState([]);

  function handleAddUser(name,age){
    setUsersList((prevUsersList) => {
        return [...prevUsersList, {name:name, age:age, id:Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
