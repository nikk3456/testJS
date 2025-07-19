import table from './components/table';


function App(){
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