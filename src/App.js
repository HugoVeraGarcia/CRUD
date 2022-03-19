import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles/styles.css"

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null); 

  //READ
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => {
        console.log('res.data',res.data);
        setUsers(res.data)
      });
  };

  //CREATE
  const addUser = (user) => {
    axios.post('https://users-crud1.herokuapp.com/users/', user)
      .then(()=> getUsers());
  }
    //UPDATE
    const updateUser = (user) => {
      axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
        .then(()=> getUsers());
    }
    //DELETE
    const deleteUser = (id) => {
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(()=> getUsers() );
    }  

  useEffect(()=>{
    getUsers();
  },[]);
  
  const getSelected = (user)=>{setUserSelected(user)};

  return (
    <div className="App">
      <UserForm
        addUser = {addUser}
        userSelected = {userSelected}
        getSelected = {getSelected}
        updateUser = {updateUser}
      />      
      <UserList 
        users = {users} 
        deleteUser={deleteUser}
        getSelected={getSelected}
      />

    </div>
  );
}

export default App;
