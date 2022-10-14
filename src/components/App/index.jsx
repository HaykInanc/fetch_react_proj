import { useState, useEffect } from "react";
import { Context } from '../../context';
import UsersContainer from "../UsersContainer";
import { getAllUsers } from '../../requests/user';
import AddUser from "../AddUser";

function App() {

  const [users, setUsers] = useState([]);

  const createNewUser = user => {
    setUsers(prev => [...prev, user])
  };

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <Context.Provider value={{users, createNewUser}}>
      <AddUser />
      <UsersContainer />
    </Context.Provider>
  );
}

export default App;
