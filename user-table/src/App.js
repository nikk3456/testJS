import React, { useEffect, useState } from "react";
import table from './components/table';
import { getUsers } from "./untils/api";

function App(){
  /*значение, изменени->начальное*/
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  
  
  return(
    /*JS внутри JSX + сам стиль -> {{}}
    без дефисов!!*/
    <div style={{maxWidth:'1400px', width:'100%'}}> 
      <h1 style={{textAlign: 'center'}}>Таблица пользователей:</h1>
      <table/>
    </div>    
  );
}


export default App;