import { useState, useEffect } from 'react';
console.clear();
function useFetch( URL ){

  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [ counter, setCounter ] = useState(0); 

  useEffect(()=>{
    // Ajax call => set State
    async function fetchTodos(){
      try {
        setLoading( true );
        const res = await fetch( URL );
        const data = await res.json(); 
        // Batch Updates: in multiple set states of the same state variable
        // React keeps the last one:
        // setCounter(1)
        // setCounter(2)
        // setCounter(3) // <= React will keep this one
        setData( data ); // <= Two State Changes in One
      } catch (e){
        setError(e);
      } finally {
        setLoading(false); // <= Two State Changes in One
      }
    }
    fetchTodos();
  },[]);

  return {
    data,
    isLoading,
    error
  }
}
function Dashboard(){
  const [ todos, setTodos ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  console.log("Dashboard()");
  useEffect(()=>{
    // Ajax call => set State
    async function fetchTodos(){
      try {
        setLoading( true );
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_delay=3000&debug=" + Math.random());
        const data = await res.json(); // VM1062:2 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 1
        // const data = await res.text(); 
        console.log( "data", data );
        setTodos( data.slice(0,5) );
      } catch (e){
        console.log("Error:", e.message);
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  },[]);

  if ( error ){
    return <mark>Error: Could not reach server</mark>
  }

  return (
    <>
    <h2>Dashboard</h2>
    { isLoading && <strong>Loading...</strong> }
    {/* { error && <mark>Error: Could not reach server</mark> } */}
    <ul>
      {todos.map( todo =>{
        return (
          <li key={todo.id} style={{ opacity: todo.completed ? 1 : 0.5 }}>
            { todo.title }
          </li>
        )
      })}
    </ul>
    </>
  )
}
function Panel(){
  console.log("Panel()");
  const { counter, data: todos, isLoading, error } = useFetch( "https://jsonplaceholder.typicode.com/todos?_delay=3000&debug=" + Math.random() );
  // ALWAYS TEST FOR NEGATIVE OUTCOMES & EDGE CASES:
  // const { data } = useFetch( "https://jsonplaceholder.typicode.com/todos/1?_delay=3000&debug=" + Math.random() );

  return (
    <>
      <h2>Panel { counter }</h2>
      {/* { data && data.title } */}
      { isLoading && <strong>Loading...</strong> }
      { error && <mark>Error: { error.message }</mark> }
      { todos && todos.slice(0,5).map( todo =>{
        return <p key={todo.id}>{ todo.title }</p>
      })}
    </>
  )
}

export default function App() {
  return (
    <>
      <h1>React</h1>
      <Dashboard />
      <Panel />
    </>
  );
}
