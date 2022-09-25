import React, { useState } from 'react'
import allusers from './usermanage/userdata'
import Usertable from './usermanage/Usertable';
import UserForm from './usermanage/UserForm';

const App = () => {
  //defining the hook and assigning API data to it
  const [users, setUsers] = useState(allusers);
  //console.log(users);

  //function that handles the user id automatically
  const addUser = (newuser) => {
    //increment the id
    newuser.id = users.length + 1
    //need to update the data also using the 2nd variable of useState()
    setUsers([...users, newuser]);
  }

  //making a function that deletes the data of the user
  const deleteUser = (id) => {
    //using the hook 2nd variable to update the data
    //also using the filter() method to return the new array of user
    setUsers(users.filter((used) => used.id !== id));
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <Usertable allusers={users} deluser={deleteUser}/>
        </div>
        <div className='col-md-6'>
          <UserForm addoneuser={addUser} />
        </div>
      </div>
    </div>
  )
}

export default App