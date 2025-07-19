import React, { useEffect, useState } from "react";
import table from './components/table';
import { getUsers } from "./untils/api";

function App(){
  /*хранение - значение, изменени->начальное*/
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");

  /*действие [когда изменяется переменныя повторить]*/
  useEffect(()=>{
    getUsers().then(data => setUsers(data.users)).catch(err => setErrors(err.errors))
  },[]);
  
  
  return(
    /*JS внутри JSX + сам стиль -> {{}}
    без дефисов!!*/
    <div style={{maxWidth:'1400px', width:'100%'}}> 
      <h1 style={{textAlign: 'center'}}>Таблица пользователей:</h1>
      {errors &&
        <p style={{color: 'red'}}>
          {errors}
        </p>}
      <table users={users} />
    </div>    
  );
}


export default App;