import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

  const [userList, setUserList] = useState([]);

  function onUserHandker(uName, uAge) {

  }

  return (
    <div>
      <AddUser onAddUser={}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
